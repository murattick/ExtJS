﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ExtJSMVC.Models
{
    public class Item
    {
        [ScaffoldColumn(false)]
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ItemID { get; set; }

        [DisplayName("Наименование")]
        [Required(ErrorMessage = "Введите наименование")]
        [StringLength(160)]
        public string Title { get; set; }

        //[RegularExpression(@"^\d{4}-\d{4}$")]
        [Required]
        public string Code { get; set; }

        [DisplayName("Бренд")]
        public string Brand { get; set; }

        [DisplayName("Категория")]
        public string Category { get; set; }

        [DisplayName("Стоимость")]
        [Required(ErrorMessage = "Введите стомость")]
        [Range(0.01, 100.00,
            ErrorMessage = "Цена должна быть от 0.01 до 100.00")]
        public decimal Price { get; set; }

        [DisplayName("Логотип")]
        [StringLength(1024)]
        public string ItemArtUrl { get; set; }

        //public virtual Category Category { get; set; }
        //public virtual Brand Brand { get; set; }
        //public virtual ICollection<Order> Orders { get; set; }

    }
}