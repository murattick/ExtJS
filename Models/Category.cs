using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

//класс категорий
namespace ExtJSMVC.Models
{
    public class Category
    {
        public int CategoryID { get; set; }

        public string Name { get; set; }

        //public virtual ICollection<Item> Items { get; set; } 
    }
}