using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RetailApp.Database;

namespace RetailApp.Controllers
{
    public class PrizeController : Controller
    {
        //
        // GET: /Prize/

        public ActionResult Index(String Token)
        {
            if (Token == null)
            {
                Token = Request.Cookies["Token"].Value; 
            }
            using (var csx = new RetailAppEntities())
            {
                USER u = csx.USER.SingleOrDefault(user => user.Token == Token);
                ViewBag.Profile = u;
                csx.Entry(u).State = System.Data.Entity.EntityState.Modified;
                u.Status = 6;
                u.Fecha = DateTime.Now;
                csx.SaveChanges();
                PRICES p = csx.PRICES.SingleOrDefault(price => price.PerfilVIP == u.Perfil);
                ViewBag.Price = p;
            }
            return View();
        }      
    } 
        
}
