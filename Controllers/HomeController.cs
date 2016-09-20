using ExtJSMVC.Models;
using SenchaDesignerExtension.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJSMVC.Controllers
{
    public class HomeController : Controller
    {
        public CustomMembershipDB db = new CustomMembershipDB();
        //public StoreContext context = new StoreContext();
       

        public ActionResult Index()
        {
            var user = db.Users.ToList();
            var role = db.Roles.ToList();
            return View(user);
        }

        public ActionResult Update() 
        {
            var user = db.Users.ToList();
            return View(user);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Update(int id, FormCollection formValues)
        {
            User user = db.Users.Find(id);
            try
            {
                UpdateModel(user);
                db.SaveChanges();
                return RedirectToAction("Index");

            }
            catch (DataException /* dex */)
            {
                //Log the error (uncomment dex variable name after DataException and add a line here to write a log.)
                ModelState.AddModelError("", "Не удалось сохранить изменения. Повторите снова или обратитесь к системному администратору.");
            }
            return View(user);
        }


        public ActionResult About()
        {
            return View();
        }
    }
}
