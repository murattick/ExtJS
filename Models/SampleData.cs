using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ExtJSMVC.Models;

//добавления тестовых данных в таблицу товаров
namespace ExtJSMVC.Models
{
    public class SampleData : DropCreateDatabaseIfModelChanges<StoreContext>
    {
        protected override void Seed(StoreContext context)
        {
            
            new List<Item>
            {
                new Item { Title = "Item1", Category = "TV", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item2", Category = "TV", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item3", Category = "TV", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item4", Category = "TV", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item5", Category = "Laptop", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item6", Category = "Laptop", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item7", Category = "Laptop", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item8", Category = "Laptop", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item9", Category = "Phone", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item10", Category = "Phone", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item11", Category = "Phone", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item12", Category = "Phone", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item13", Category = "Audio", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item14", Category = "Audio", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item15", Category = "Audio", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item16", Category = "Audio", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item17", Category = "Photo", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item18", Category = "Photo", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item19", Category = "Photo", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item20", Category = "Photo", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item21", Category = "Video", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item22", Category = "Video", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item23", Category = "Video", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item24", Category = "Video", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item25", Category = "Flash", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item26", Category = "Flash", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item27", Category = "Flash", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item28", Category = "Flash", Price = 8.99M, Brand = "Brand1", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item29", Category = "Mause", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item30", Category = "Mause", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item31", Category = "Mause", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item32", Category = "Mause", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item33", Category = "Monitor", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item34", Category = "Monitor", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item35", Category = "Monitor", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item36", Category = "Monitor", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item37", Category = "HDD", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item38", Category = "HDD", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item39", Category = "HDD", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item40", Category = "HDD", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item41", Category = "TV", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item42", Category = "TV", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item43", Category = "TV", Price = 8.99M, Brand = "Brand2", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item44", Category = "TV", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item45", Category = "Laptop", Price = 8.99M, Brand = "Brand4", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item46", Category = "Laptop", Price = 8.99M, Brand = "Brand5", ItemArtUrl = "/Images/placeholder.gif" },
                new Item { Title = "Item47", Category = "Laptop", Price = 8.99M, Brand = "Brand3", ItemArtUrl = "/Images/placeholder.gif" },
      }.ForEach(a => context.Items.Add(a));
        }
    }
}