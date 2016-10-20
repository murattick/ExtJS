using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

//класс заказа
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

        public int? Discount { get; set; }

        public int Count { get; set; }

        public int Price { get; set; }
    
        public string Code { get; set; }

        public string Status { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime ChangeStatus { get; set; }

        public string UserName { get; set; }

    }
}