using SmartCom.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

//репозиторий и методы репозитория
namespace SmartCom.DAL
{
    public class GenericRepository<TEntity> where TEntity : class
    {
        //подключение контекста базы данных
        internal StoreContext context;
        internal DbSet<TEntity> dbSet;

        //генерация репозитория по контексту
        public GenericRepository(StoreContext context)
        {
            this.context = context;
            this.dbSet = context.Set<TEntity>();
        }

        //метод GET
        public virtual IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<TEntity> query = dbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return orderBy(query).ToList();
            }
            else
            {
                return query.ToList();
            }
        }

        // async метод Get по ID
        public virtual async Task<TEntity> GetByIDAsync(object id)
        {
            return await dbSet.FindAsync(id);
        }

        //метод добавления
        public virtual void Insert(TEntity entity)
        {
            dbSet.Add(entity);
        }

        //асинхронный метод добавления
        public async Task InsertAsync(TEntity entity)
        {

            dbSet.Add(entity);
            await context.SaveChangesAsync();
        }
        //удаление
        public virtual void Delete(object id)
        {
            TEntity entityToDelete = dbSet.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (context.Entry(entityToDelete).State == System.Data.Entity.EntityState.Detached)
            {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        }

        //асинхронный метод удаления
        public async Task DeleteAsync(TEntity entity)
        {
            dbSet.Remove(entity);
            await context.SaveChangesAsync();
        }

        //обновление
        public virtual void Update(TEntity entityToUpdate)
        {
            dbSet.Attach(entityToUpdate);
            context.Entry(entityToUpdate).State = EntityState.Modified;
        }

        //асинхронное обновление
        public async Task UpdateAsync(TEntity entityToUpdate)
        {
            context.Entry(entityToUpdate).State = EntityState.Modified;
            await context.SaveChangesAsync();
        }
    }
}