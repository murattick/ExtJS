using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJSMVC.Models
{
    public class Order
    {
        [ScaffoldColumn(false)]
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int OrderID { get; set; }

        public string Title { get; set; }

        public int? ItemID { get; set; }

        public int Count { get; set; }

        public int Price { get; set; }
    
        public string Code { get; set; }

        public string Status { get; set; }

        public string OrderDate { get; set; }

        public string ChangeStatus { get; set; }

        public string UserName { get; set; }

        //[Required(ErrorMessage = "Введите Ваше имя")]
        //[DisplayName("Имя")]
        //[StringLength(160)]
        //public string FirstName { get; set; }

        //[Required(ErrorMessage = "Введите Вашу фамилию")]
        //[DisplayName("Фамилия")]
        //[StringLength(160)]
        //public string LastName { get; set; }

        //[DisplayName("Адресс")]
        //[Required(ErrorMessage = "Введите Ваш адресс")]
        //[StringLength(70)]
        //public string Address { get; set; }

        //[DisplayName("Город")]
        //[Required(ErrorMessage = "Введите Ваш город")]
        //[StringLength(40)]
        //public string City { get; set; }

        //[DisplayName("Область")]
        //[Required(ErrorMessage = "Введите область")]
        //[StringLength(40)]
        //public string State { get; set; }

        //[Required(ErrorMessage = "Введите индекс")]
        //[DisplayName("Индекс")]
        //[StringLength(10)]
        //public string PostalCode { get; set; }

        //[DisplayName("Страна")]
        //[Required(ErrorMessage = "Введите страну")]
        //[StringLength(40)]
        //public string Country { get; set; }

        //[DisplayName("Номер телефона")]
        //[Required(ErrorMessage = "Введите Ваш номер телефона")]
        //[StringLength(24)]
        //public string Phone { get; set; }

        //[Required(ErrorMessage = "Введите Ваш Emal")]
        //[DisplayName("Email")]
        //[RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}",
        //    ErrorMessage = "Поле Email введено не корректно.")]
        //[DataType(DataType.EmailAddress)]
        //public string Email { get; set; }

        //[DisplayName("Сумма")]
        //[ScaffoldColumn(false)]
        //public decimal Total { get; set; }

        // Перечисление для статуса
        //public enum RequestStatus
        //{
        //    Open = 1,
        //    Proccesing = 2,
        //    Closed = 3
        //}

        //public virtual ICollection<Item> Items { get; set; }
        //public User User { get; set; }
        //public virtual Lifecycle Lifecycle { get; set; }
    }
}