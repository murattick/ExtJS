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
        private UnitOfWork unitOfWork = new UnitOfWork();

        //вывод всех товаров
        // GET: /Store/
        [Authorize]
        public JsonResult Get(int? start, int? limit)
        {
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;
                int cnt = unitOfWork.ItemRepository.Get().Count();
                var recs = unitOfWork.ItemRepository.Get().
                    Skip(start.Value).Take(limit.Value).ToList();
                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        //вывод всех товаров для адмниа
        // GET: /Store/
        [Authorize(Roles = "Admin")]
        public JsonResult GetAdminGrid(int? start, int? limit)
        {
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;
                int cnt = unitOfWork.ItemRepository.Get().Count();
                var recs = unitOfWork.ItemRepository.Get().
                    Skip(start.Value).Take(limit.Value).ToList();
                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        //обновление товара
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Update(Item data)
        {
            bool success = false;
            string message = "no record found";
            if (data != null && data.ItemID > 0)
            {

                {
                    var rec = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                        FirstOrDefault();

                    rec.Title = data.Title;
                    rec.Code = data.Code;
                    rec.Category = data.Category;
                    rec.Brand = data.Brand;
                    rec.Price = data.Price;
                    //rec.ItemArtUrl = data.ItemArtUrl;

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

        //доббавление товара
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Create(Item data)
        {
            bool success = false;
            string message = "no record found";


            {

                unitOfWork.ItemRepository.Insert(data);

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

        //удаление товара
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Delete(Item data)
        {
            bool success = false;
            string message = "no record found";

            {
                Item item = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                    FirstOrDefault();

                
                unitOfWork.ItemRepository.Delete(item);

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

        protected override void Dispose(bool disposing)
        {
            unitOfWork.Dispose();
            base.Dispose(disposing);
        }
    }
}
