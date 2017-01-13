using SmartCom.Models;
using System;
using System.Threading.Tasks;

namespace SmartCom.DAL
{
    public class UnitOfWork : IDisposable
    {
        //подключение контекста базы данных
        private StoreContext context = new StoreContext();
        //создание репозитория для товара
        private GenericRepository<Item> itemRepository;
        //создание репозитория для заказа
        private GenericRepository<Order> orderRepository;
        //создание репозитория для категорий
        private GenericRepository<Category> categoryRepository;


        public GenericRepository<Item> ItemRepository
        {
            get
            {
                if (this.itemRepository == null)
                {
                    this.itemRepository = new GenericRepository<Item>(context);
                }
                return itemRepository;
            }
        }

        public GenericRepository<Order> OrderRepository
        {
            get
            {
                if (this.orderRepository == null)
                {
                    this.orderRepository = new GenericRepository<Order>(context);
                }
                return orderRepository;
            }
        }

        public GenericRepository<Category> CategoryRepository
        {
            get
            {
                if (this.categoryRepository == null)
                {
                    this.categoryRepository = new GenericRepository<Category>(context);
                }
                return categoryRepository;
            }
        }

        //метод сохранения
        public void Save()
        {
            context.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await context.SaveChangesAsync();
        }

        private bool disposed = false;

        //метод отключения репозиторя
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}