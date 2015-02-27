using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RetailApp.Database;
using System.Web.UI.WebControls;
using System.Collections.Specialized;
using System.Net.Mail;
using System.Web.UI;


namespace RetailApp.App_Start
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index(String Token)
        {
            ViewBag.Token = Token;
            return View();
        }


        [HttpPost]
        public ActionResult EmailLogin(String Email, String Token)
        {
            using (var csx = new RetailAppEntities2()) {
                USER u = csx.USER.SingleOrDefault(user => user.Token == Token);
                if (u != null)
                {
                    csx.Entry(u).State = System.Data.Entity.EntityState.Modified;
                    u.Email = Email;
                    csx.SaveChanges();
                }
                else {
                    throw new ApplicationException("El Token es invalido.");
                }
            }
            return RedirectToAction("Index","Questionnaire");

        }
        }
}
