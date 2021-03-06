﻿using SmartCom.DAL;
using SmartCom.Models;
using System;
using System.Linq;
using System.Web.Mvc;

//контройлер заказов

namespace SmartCom.Controllers
{
    public class CheckoutController : Controller
    { 
        //подключение репозитория
        private UnitOfWork unitOfWork = new UnitOfWork();
        public CustomMembershipDB db = new CustomMembershipDB();
        //вывод всех заказов, только для администратора
        [Authorize(Roles = "Admin")]
        public JsonResult Get(int? start, int? limit, Order order)
        {
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;
                //происходит через репозиторий Ордера
                int cnt = unitOfWork.OrderRepository.Get().Count();
                var recs = unitOfWork.OrderRepository.Get().
                    Skip(start.Value).Take(limit.Value).ToList();
                
                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        // GET: /Checkout/

        //оформление заказа
        [Authorize]
        [HttpPost]
        public JsonResult AddressAndPayment(Order data)
        {
            bool success = false;
            string message = "no record found";
           
            {
                User user = db.Users.Where(m => m.UserName == HttpContext.User.Identity.Name).First();
                //добавление имени авторизированного пользователя в заказ
                data.UserName = User.Identity.Name;
                data.Discount = user.Discount;
                data.OrderDate = DateTime.Now;
                data.ChangeStatus = DateTime.Now;
                //сохоранение заказа
                unitOfWork.OrderRepository.Insert(data);
                unitOfWork.Save();

                success = true;
                message = "add method called successfully";
              
            }

            return Json(new
            {
                data,
                success,
                message
            });

        }

        //обновление заказа, только для администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Update(Order data)
        {
            bool success = false;
            string message = "no record found";
            if (data != null && data.OrderID > 0)
            {
                //обновление по ID заказа
                {
                    var rec = unitOfWork.OrderRepository.Get(a => a.OrderID == data.OrderID).
                        FirstOrDefault();

                    rec.OrderID = data.OrderID;
                    rec.ItemID = data.ItemID;
                    rec.Title = data.Title;
                    rec.Price = data.Price;
                    rec.Count = data.Count;
                    rec.Code = data.Code;
                    rec.Status = data.Status;
                    rec.OrderDate = data.OrderDate;
                    rec.ChangeStatus = DateTime.Now;

                    unitOfWork.Save();
                    success = true;
                    message = "Update method called successfully";
                }
            }

            return Json(new
            {
                data,
                success,
                message
            });
        }

        //удаление заказа, только для администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Delete(Order data)
        {
            bool success = false;
            string message = "no record found";
            
            //удаление по ID
                {
                    Order order = unitOfWork.OrderRepository.Get(a => a.OrderID == data.OrderID).
                        FirstOrDefault();


                    unitOfWork.OrderRepository.Delete(order);
                    //сохранение
                    unitOfWork.Save();
                    success = true;
                    message = "Update method called successfully";
                }
            
            
            return Json(new
            {
                data,
                success,
                message
            });
        }

        //удаление совершенного заказа пользователем
        [Authorize]
        public JsonResult DeleteTrackOrder(Order data)
        {
            //удалить возможно только тогда, когда статус заказа находится в Open
            if (data.Status == "Open")
            {
                try
                {
                    Order order = unitOfWork.OrderRepository.Get(a => a.OrderID == data.OrderID).
                        FirstOrDefault();

                    //удаление
                    unitOfWork.OrderRepository.Delete(order);
                    //сохранение
                    unitOfWork.Save();
                }
                    //после выполнения система даст сообщение о успешном/не успешном выполнении удаления
                catch (Exception ex)
            {
                return Json(new { errorMessage = ex.Message});
            }
                return Json(new { errorMessage = "OK!" });
            }

            return Json(new
            {
                data
            });
        }

        //отслеживание заказа пользователем по авторизованному имени
        [Authorize]
        public JsonResult OrderUser()
        {
            

            //выборка количества заказов 
                int cnt = unitOfWork.OrderRepository.Get().Count();
            //выбираются заказы совершенные данным авторизированным пользователем.
                var recs = unitOfWork.OrderRepository.Get(o => o.UserName == User.Identity.Name);


                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            
        }

        //отключение репозитория
        protected override void Dispose(bool disposing)
        {
            unitOfWork.Dispose();
            base.Dispose(disposing);
        }
    }
}
