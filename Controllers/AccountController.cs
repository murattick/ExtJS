using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using ExtJSMVC.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using CustomMembership.Models;
using SenchaDesignerExtension.Models;

namespace ExtJSMVC.Controllers
{
    [Authorize]
    [HandleError]
    public class AccountController : Controller
    {
        public IRoleService RoleService { get; set; }

        protected override void Initialize(RequestContext requestContext)
        {
            if (RoleService == null) { RoleService = new AccountRoleService(); }

            base.Initialize(requestContext);
        }

        private IEnumerable<string> GetErrorsFromModelState()
        {
            return ModelState.SelectMany(x => x.Value.Errors.Select(error => error.ErrorMessage));
        }

        //ппервая регистрация будет выполнена администратором
        // GET: /Account/Login

        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            if (!RoleService.AdminExists())
            {
                ViewBag.Message = "You must configure the administrator account before the application start work.";
                return RedirectToAction("RegisterAdmin");
            }
            return View();
        }

        //
        // POST: /Account/Login

        [HttpPost]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model, string returnUrl)
        {
            if (ModelState.IsValid)
                return LoginUser(model, returnUrl);

            // Появление этого сообщения означает наличие ошибки; повторное отображение формы
            ModelState.AddModelError("", "Имя пользователя или пароль указаны неверно.");
            return View(model);
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult LoginOpacity(string username, string password, string returnUrl)
        {
            var model = new LoginModel
            {
                Password = password,
                UserName = username,
                RememberMe = false
            };
            return LoginUser(model, returnUrl);
        }

        private ActionResult LoginUser(LoginModel model, string returnUrl)
        {
            try //(Membership.ValidateUser(model.UserName, model.Password))
            {
                FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
            }
            catch (Exception ex)
            {
                return Json(new { errorMessage = ex.Message});
            }
            return Json(new { errorMessage = "Successful!" });
        }
        
        //
        // POST: /Account/LogOff

        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();

            return RedirectToAction("Index", "Home");
        }

        //
        // GET: /Account/Register

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // POST: /Account/Register

        [HttpPost]
        [AllowAnonymous]
        public ActionResult Register(RegisterModel model)
        {
            try// (ModelState.IsValid)
            {
                // Attempt to register the user
                MembershipCreateStatus createStatus;
                Membership.CreateUser(model.UserName, model.Password, model.Email, passwordQuestion: null, passwordAnswer: null, isApproved: model.IsEmailRegConform, providerUserKey: null, status: out createStatus);
                if (createStatus == MembershipCreateStatus.Success)
                {
                    if (model.IsEmailRegConform)    //conform registration by email
                    {
                        return RedirectToAction("Welcome", "Home");
                    }
                    else                            //without email conformation
                    {
                        RoleService.CreateRole("User");
                        RoleService.AddUsersToRoles(new string[] { model.UserName }, new string[] { "User" });
                        FormsAuthentication.SetAuthCookie(model.UserName, createPersistentCookie: false);
                        //return RedirectToAction("Index", "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError("", ErrorCodeToString(createStatus));
                }
            }

          catch (Exception ex)
            {
                return Json(new { errorMessage = ex.Message });
            }
            return Json(new { errorMessage = "Successful!" });
        }

        // ************************************** Регистрация администратора
        // URL: /Account/AdminSetup
        // **************************************
        [AllowAnonymous]
        public ActionResult RegisterAdmin()
        {
            if (RoleService.AdminExists())
                return RedirectToAction("Login");
            return View();
        }
        [AllowAnonymous]
        [HttpPost]
        public ActionResult RegisterAdmin(RegisterModel model)
        {
            if (ModelState.IsValid)
            {

                MembershipCreateStatus createStatus;// = Membership.CreateUser(model.UserName, model.Password, model.Email, true);
                Membership.CreateUser(model.UserName, model.Password, model.Email, passwordQuestion: null, passwordAnswer: null, isApproved: model.IsEmailRegConform, providerUserKey: null, status: out createStatus);
                if (createStatus == MembershipCreateStatus.Success)
                {
                    RoleService.CreateRole("Admin");
                    RoleService.AddUsersToRoles(new string[] { model.UserName }, new string[] { "Admin" });
                    FormsAuthentication.SetAuthCookie(model.UserName, createPersistentCookie: false);
                    return RedirectToAction("Admin", "Home");
                }
                else
                {
                    ModelState.AddModelError("", ErrorCodeToString(createStatus));
                }
            }
            return View(model);
        }


        // **************************************
        // URL: /Account/Activate/username/key
        // **************************************
        [AllowAnonymous]
        public ActionResult Activate(string username, string key)
        {
            MembershipUser user = Membership.GetUser(username);
            if (user != null && user.IsApproved == false)
            {
                user.IsApproved = true;
                RoleService.CreateRole("User");
                RoleService.AddUsersToRoles(new string[] { username }, new string[] { "User" });
                FormsAuthentication.SetAuthCookie(username, createPersistentCookie: false);
                Membership.UpdateUser(user);
            }
            else
            {
                ///TODO: add/change to error page
            }
            return RedirectToAction("Index", "Home");
        }

        ////
        //// GET: /Account/ChangePassword

        //[Authorize]
        //public ActionResult ChangePassword()
        //{
        //    return View();
        //}

        ////
        //// POST: /Account/ChangePassword

        //[Authorize]
        //[HttpPost]
        //public ActionResult ChangePassword(ChangePasswordModel model)
        //{
        //    if (ModelState.IsValid)
        //    {

        //        // ChangePassword will throw an exception rather
        //        // than return false in certain failure scenarios.
        //        bool changePasswordSucceeded;
        //        try
        //        {
        //            MembershipUser currentUser = Membership.GetUser(User.Identity.Name, true /* userIsOnline */);
        //            changePasswordSucceeded = currentUser.ChangePassword(model.OldPassword, model.NewPassword);
        //        }
        //        catch (Exception)
        //        {
        //            changePasswordSucceeded = false;
        //        }

        //        if (changePasswordSucceeded)
        //        {
        //            return RedirectToAction("ChangePasswordSuccess");
        //        }
        //        else
        //        {
        //            ModelState.AddModelError("", "The current password is incorrect or the new password is invalid.");
        //        }
        //    }

        //    // If we got this far, something failed, redisplay form
        //    return View(model);
        //}

        ////
        //// GET: /Account/ChangePasswordSuccess

        //public ActionResult ChangePasswordSuccess()
        //{
        //    return View();
        //}

        #region Status Codes
        private static string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
            // See http://go.microsoft.com/fwlink/?LinkID=177550 for
            // a full list of status codes.
            switch (createStatus)
            {
                case MembershipCreateStatus.DuplicateUserName:
                    return "User name already exists. Please enter a different user name.";

                case MembershipCreateStatus.DuplicateEmail:
                    return "A user name for that e-mail address already exists. Please enter a different e-mail address.";

                case MembershipCreateStatus.InvalidPassword:
                    return "The password provided is invalid. Please enter a valid password value.";

                case MembershipCreateStatus.InvalidEmail:
                    return "The e-mail address provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidAnswer:
                    return "The password retrieval answer provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidQuestion:
                    return "The password retrieval question provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidUserName:
                    return "The user name provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.ProviderError:
                    return "The authentication provider returned an error. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                case MembershipCreateStatus.UserRejected:
                    return "The user creation request has been canceled. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                default:
                    return "An unknown error occurred. Please verify your entry and try again. If the problem persists, please contact your system administrator.";
            }
        }
        #endregion
    }
}
