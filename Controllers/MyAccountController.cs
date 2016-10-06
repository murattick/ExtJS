using ExtJSMVC.Models;
using SenchaDesignerExtension.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

//контройлер для работы с аккаунтотм

namespace SenchaDesignerExtension.Controllers
{
    public class MyAccountController : Controller
    {
        //подключение базы данных с пользователями системы
        private CustomMembershipDB db = new CustomMembershipDB();

        //
        // GET: /MyAccount/
        //вывод всех пользователей системы, только для администратора

        [Authorize(Roles = "Admin")]
        [AllowAnonymous]
        public JsonResult GetAll(int? start, int? limit)
        {
            db.Configuration.ProxyCreationEnabled = false;
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;
                //вычисляется количетво пользователей системы
                int cnt = db.Users.Count();
                //вывод пользователей
                var recs = db.Users.OrderBy(a => a.UserId).
                    Skip(start.Value).Take(limit.Value).ToList();


                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        //вывод авторизированного на данный момент пользователя
        [Authorize]
        [AllowAnonymous]
        public JsonResult Get(int? start, int? limit)
        {
            db.Configuration.ProxyCreationEnabled = false;
            {
                start = start.HasValue ? start.Value : 0;
                limit = limit.HasValue ? limit.Value : Int32.MaxValue;
                int cnt = db.Users.Count();
                //происходит по идентификаци авторизированного на данный момент пользователя
                var recs = db.Users.Where(o => o.UserName == User.Identity.Name).FirstOrDefault();


                return Json(new
                {
                    Data = recs,
                    total = cnt
                }, JsonRequestBehavior.AllowGet);
            }
        }

        //обновления аккаунта (добавление адреса), только для авторизированного пользователя
        [Authorize]
        [HttpPost]
        [AllowAnonymous]
        public JsonResult Update(User data)
        {
            db.Configuration.ProxyCreationEnabled = false;
            bool success = false;
            string message = "no record found";
            if (data != null && data.UserId > 0)
            {

                {

                    var rec = db.Users.Where(a => a.UserId == data.UserId).
                        FirstOrDefault();

                  //добавление данных в аккаунт
                    rec.Code = data.Code;
                    rec.FirstName = data.FirstName;
                    rec.LastName = data.LastName;
                    rec.Phone = data.Phone;
                    rec.Email = data.Email;
                    rec.Country = data.Country;
                    rec.State = data.State;
                    rec.City = data.City;
                    rec.PostalCode = data.PostalCode;
                    rec.Address = data.Address;


                    UpdateModel(data);
                    db.SaveChanges();

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

       

    }
}
