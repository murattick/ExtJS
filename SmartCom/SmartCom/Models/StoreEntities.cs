using System.Data.Entity;

//создание контекста базы данных
namespace SmartCom.Models
{
    //определенрие имены контекста базы данных
    public partial class StoreContext : DbContext
    {
        //добавление в контекст класс товаров
        public virtual DbSet<Item> Items { get; set; }

        //добавление в контекст класс заказов
        public virtual DbSet<Order> Orders { get; set; }

        //добавление в контекст класса категорий
        public virtual DbSet<Category> Categorys { get; set; }
        
    }
}