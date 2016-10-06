using SenchaDesignerExtension.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

//создание контекста базы данных
namespace ExtJSMVC.Models
{
    //определенрие имены контекста базы данных
    public partial class StoreContext : DbContext
    {
        //добавление в контекст класс товаров
        public virtual DbSet<Item> Items { get; set; }

        //добавление в контекст класс заказов
        public virtual DbSet<Order> Orders { get; set; }
        
    }
}