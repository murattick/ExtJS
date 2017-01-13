using SmartCom.DAL;
using SmartCom.Models;
using System;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace SmartCom.Controllers
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
        //[Authorize(Roles = "Admin")]
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
        public async Task<JsonResult> Update(Item data)
        {
            

            var level = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                            FirstOrDefault();
            var levelNow = level.Level;
            var levelUp = data.Level + 1;
            if (data != null && data.ItemID > 0 && levelNow < levelUp && levelNow == data.Level)
            {
                try
                {
                    if (ModelState.IsValid)
                    {
                        //выборка
                        var rec = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                            FirstOrDefault();
                        //данные
                        rec.Title = data.Title;
                        rec.Code = data.Code;
                        rec.Level = levelUp;
                        rec.Brand = data.Brand;
                        rec.Price = data.Price;

                        //сохранение 
                        await unitOfWork.SaveChangesAsync();
                    }
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Json(new { errorMessage = "Update failed. Perhaps there was a parallel data update. Try again later or contact your system administrator." });
                }
                return Json(new { errorMessage = "Successful!" });
            }

            return Json(new { errorMessage = "Update failed. Perhaps there was a parallel data update. Try again later or contact your system administrator." });

        }

        //доббавление товара, только для администратора
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<JsonResult> Create(Item data)
        {
            bool success = false;
            string message = "no record found";


            {
                //добавление
                await unitOfWork.ItemRepository.InsertAsync(data);
               //сохранение
                await unitOfWork.SaveChangesAsync();
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
        public async Task<JsonResult> Delete(Item data)
        {
            var delData = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).FirstOrDefault();
            if (data != null && data.ItemID > 0 && delData != null)
            {
                try
                {
                    if (ModelState.IsValid)
                    {
                        //выборка
                        Item item = unitOfWork.ItemRepository.Get(a => a.ItemID == data.ItemID).
                            FirstOrDefault();

                        //удаление 
                       await unitOfWork.ItemRepository.DeleteAsync(item);

                        //сохранение
                        unitOfWork.Save();
                    }
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Json(new { errorMessage = "Delete failed. Perhaps there was a parallel data delete. Try again later or contact your system administrator." });
                }
                return Json(new { errorMessage = "Successful!" });
            }

            return Json(new
            {
                data
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
