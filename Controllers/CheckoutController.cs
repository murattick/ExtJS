using ExtJSMVC.DAL;
using ExtJSMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJSMVC.Controllers
{
    public class CheckoutController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        //вывод всех заказов
        [Authorize(Roles = "Admin")]
        public JsonResult Get(int? start, int? limit)
        {
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;
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

                data.UserName = User.Identity.Name;
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

        //обновление заказа
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Update(Order data)
        {
            bool success = false;
            string message = "no record found";
            if (data != null && data.OrderID > 0)
            {

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

        //удаление заказа
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Delete(Order data)
        {
            bool success = false;
            string message = "no record found";
            
            
                {
                    Order order = unitOfWork.OrderRepository.Get(a => a.OrderID == data.OrderID).
                        FirstOrDefault();


                    unitOfWork.OrderRepository.Delete(order);

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

        public JsonResult DeleteTrackOrder(Order data)
        {

            if (data.Status == "Open")
            {
                try
                {
                    Order order = unitOfWork.OrderRepository.Get(a => a.OrderID == data.OrderID).
                        FirstOrDefault();


                    unitOfWork.OrderRepository.Delete(order);

                    unitOfWork.Save();
                }

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

        //track order for user name
        [Authorize]
        public JsonResult OrderUser(int? start, int? limit)
        {
            
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;


                int cnt = unitOfWork.OrderRepository.Get().Count();

                var recs = unitOfWork.OrderRepository.Get(o => o.UserName == User.Identity.Name).
                    Skip(start.Value).Take(limit.Value).FirstOrDefault();


                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            
        }

        protected override void Dispose(bool disposing)
        {
            unitOfWork.Dispose();
            base.Dispose(disposing);
        }
    }
}
