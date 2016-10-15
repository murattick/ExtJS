using ExtJSMVC.DAL;
using ExtJSMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJSMVC.Controllers
{
    public class ShopController : Controller
    {
        //подключение репозитория
        private UnitOfWork unitOfWork = new UnitOfWork();
        //вывод всех товаров
        // GET: /Store/
        public JsonResult Get(int? start, int? limit, int? data)
        {
            {
                if (data == null) //значение CategoryID, если не пришло, то выводится список товаров в произвольном порядке
                {


                    start = start.HasValue ? start.Value : 0;
                    limit = limit.HasValue ? limit.Value : Int32.MaxValue;

                    //вычисляется количество товаров
                    int cnt = unitOfWork.ItemRepository.Get().Count();

                    //сам запрос на вывод товаров
                    var recs = unitOfWork.ItemRepository.Get().
                        Skip(start.Value).Take(limit.Value).ToList();

                    return Json(new
                    {
                        Data = recs,
                        total = cnt
                    }, JsonRequestBehavior.AllowGet);
                }
                else //если пришёл, то выводится где содержется данный CategoryID
                {
                    start = start.HasValue ? start.Value : 0;
                    limit = limit.HasValue ? limit.Value : Int32.MaxValue;

                    //вычисляется количество товаров
                    int cnt = unitOfWork.ItemRepository.Get(a => a.CategoryID == data).Count();

                    //сам запрос на вывод товаров
                    var recs = unitOfWork.ItemRepository.Get(a => a.CategoryID == data).
                        Skip(start.Value).Take(limit.Value).ToList();



                    return Json(new
                    {
                        Data = recs,
                        total = cnt
                    }, JsonRequestBehavior.AllowGet);
                }
            }
        }

        //вывод всех товаров для администратора
        // GET: /Store/
        [Authorize(Roles = "Admin")]
        public JsonResult GetAdminGrid(int? start, int? limit)
        {
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;

                //вычисляется количество товаров
                int cnt = unitOfWork.ItemRepository.Get().Count();

                    //запрос на вывод товаров
                var recs = unitOfWork.ItemRepository.Get().
                    Skip(start.Value).Take(limit.Value).ToList();

                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        //обновление товара, только для администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Update(Item data)
        {
            bool success = false;
            string message = "no record found";
            if (data != null && data.ItemID > 0)
            {

                {
                    //выборка
                    var rec = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                        FirstOrDefault();
                    //данные
                    rec.Title = data.Title;
                    rec.Code = data.Code;
                    //rec.Category = data.Category;
                    rec.Brand = data.Brand;
                    rec.Price = data.Price;

                    //сохранение 
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

        //доббавление товара, только для администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Create(Item data)
        {
            bool success = false;
            string message = "no record found";


            {
                //добавление
                
               unitOfWork.ItemRepository.Insert(data);
               //сохранение
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

        //удаление товара, только дял администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Delete(Item data)
        {
            bool success = false;
            string message = "no record found";

            {
                //выборка
                Item item = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                    FirstOrDefault();

                //удаление 
                unitOfWork.ItemRepository.Delete(item);

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

        //отключение репозитория
        protected override void Dispose(bool disposing)
        {
            unitOfWork.Dispose();
            base.Dispose(disposing);
        }
    }
}
