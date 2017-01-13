using SmartCom.DAL;
using SmartCom.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace SmartCom.Controllers
{
    public class CategoryController : Controller
    {
        //подключение репозитория
        private UnitOfWork unitOfWork = new UnitOfWork();
        //
        // GET: /Category/

        public JsonResult Get(int? start, int? limit)
        {
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;

                //вычисляется количество товаров
                int cnt = unitOfWork.CategoryRepository.Get().Count();

                //сам запрос на вывод товаров
                var recs = unitOfWork.CategoryRepository.Get().
                    Skip(start.Value).Take(limit.Value).ToList();

                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        //доббавление категории, только для администратора
        //[Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Create(Category data)
        {
            bool success = false;
            string message = "no record found";


            {
                //добавление
                unitOfWork.CategoryRepository.Insert(data);
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
        //обновление категории, только для администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Update(Category data)
        {
            bool success = false;
            string message = "no record found";
            if (data != null && data.CategoryID > 0)
            {

                {
                    //выборка
                    var rec = unitOfWork.CategoryRepository.Get(a => a.CategoryID == data.CategoryID).
                        FirstOrDefault();
                    //данные
                    rec.Name = data.Name;
                    

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
        //удаление товара, только дял администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult Delete(Category data)
        {
            bool success = false;
            string message = "no record found";

            {
                //выборка
                Category category = unitOfWork.CategoryRepository.Get(a => a.CategoryID == data.CategoryID).
                    FirstOrDefault();

                //удаление 
                unitOfWork.CategoryRepository.Delete(category);

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
