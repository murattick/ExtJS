using ExtJSMVC.Security;
using CustomMembership.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Globalization;
using System.Web.Mvc;
using System.Web.Security;

//внесены изминения в класс регистрации
namespace ExtJSMVC.Models
{
    public class UsersContext : DbContext
    {
        public UsersContext()
            : base("DefaultConnection")
        {
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }

    [Table("UserProfile")]
    public class UserProfile
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string UserName { get; set; }
    }

    public class RegisterExternalLoginModel
    {
        [Required]
        [Display(Name = "Имя пользователя")]
        public string UserName { get; set; }

        public string ExternalLoginData { get; set; }
    }

    public class LocalPasswordModel
    {
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Текущий пароль")]
        public string OldPassword { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Значение \"{0}\" должно содержать не менее {2} символов.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Новый пароль")]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Подтверждение пароля")]
        [Compare("NewPassword", ErrorMessage = "Новый пароль и его подтверждение не совпадают.")]
        public string ConfirmPassword { get; set; }
    }

    public class LoginModel
    {
        [Required]
        [Display(Name = "Имя пользователя")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        [Display(Name = "Запомнить меня")]
        public bool RememberMe { get; set; }
    }

    public class RegisterModel
    {
        [Required]
        [Display(Name = "Имя пользователя")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "Ваш Email")]
        public string Email { get; set; }

        [Display(Name = "Имя")]
        [StringLength(160)]
        public string FirstName { get; set; }

        [Display(Name = "Фамилия")]
        [StringLength(160)]
        public string LastName { get; set; }

        [Display(Name = "Адресс")]
        [StringLength(70)]
        public string Address { get; set; }

        [Display(Name = "Город")]
        [StringLength(40)]
        public string City { get; set; }

        [Display(Name = "Область")]
        [StringLength(40)]
        public string State { get; set; }

        [Display(Name = "Индекс")]
        [StringLength(10)]
        public string PostalCode { get; set; }

        [Display(Name = "Страна")]
        [StringLength(40)]
        public string Country { get; set; }

        [Display(Name = "Номер телефона")]
        [StringLength(24)]
        public string Phone { get; set; }

        [Display(Name = "Ативация по Email")]
        public bool IsEmailRegConform { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Значение \"{0}\" должно содержать не менее {2} символов.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Подтверждение пароля")]
        [Compare("Password", ErrorMessage = "Пароль и его подтверждение не совпадают.")]
        public string ConfirmPassword { get; set; }
    }

    public class ExternalLogin
    {
        public string Provider { get; set; }
        public string ProviderDisplayName { get; set; }
        public string ProviderUserId { get; set; }
    }
    public interface IRoleService
    {
        bool AdminExists();
        void AddUsersToRoles(string[] usernames, string[] rolenames);
        void RemoveUsersFromRoles(string[] usernames, string[] rolenames);
        void CreateRole(string roleName);
    }
    public class AccountRoleService : IRoleService
    {
        private readonly RoleProvider _provider;
        private UserRepository userRepo = new UserRepository();
        public AccountRoleService()
            : this(null)
        {
        }

        public AccountRoleService(RoleProvider provider)
        {
            _provider = provider ?? new MyRoleProvider();
        }

        public bool AdminExists()
        {
            var users = _provider.GetUsersInRole("Admin");

            if (users.Length == 0)
                return false;

            return true;
        }

        //ADD
        public void AddUsersToRoles(string[] usernames, string[] rolenames)
        {
            _provider.AddUsersToRoles(usernames, rolenames);
        }

        public void RemoveUsersFromRoles(string[] usernames, string[] rolenames)
        {
            _provider.RemoveUsersFromRoles(usernames, rolenames);
        }

        public void CreateRole(string roleName)
        {
            _provider.CreateRole(roleName);
        }
    }
}