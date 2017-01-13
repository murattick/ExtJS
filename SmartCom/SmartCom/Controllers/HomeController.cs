using SmartCom.Models;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace SmartCom.Controllers
{
    public class HomeController : Controller
    {
        public StoreContext db = new StoreContext();

        public async Task<JsonResult> Index(Item item)
        {
            var data = await db.Items.ToListAsync();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

       
    }
}