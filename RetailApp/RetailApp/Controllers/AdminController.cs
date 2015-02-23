using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RetailApp.Database;
using System.Web.UI.WebControls;
using System.Collections.Specialized;
using System.Net.Mail;


namespace RetailApp.App_Start
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        
        public ActionResult Index()
        {
           
            using (var usr = new RetailAppEntities2())
            {
                List<USER> l = usr.USER.ToList();
                ViewBag.Listado= l;
            }
            return View();
        }


        public ActionResult generateToken()
        {
            using (var usr = new RetailAppEntities2())
            {
                List<USER> l = usr.USER.Where(m => m.Token == "").ToList();
                foreach (USER user in l) {
                    usr.Entry(user).State = System.Data.Entity.EntityState.Modified;
                    
                    string token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
                    token = token.Replace("/","");
                    token = token.Replace("=", "");
                    token = token.Replace("+", "");
                    user.Token = token;

                    usr.SaveChanges();
                }
                
                ViewBag.Listado = l;
            }

            return RedirectToAction("Index");
        }

        
        public ActionResult checkStatus()
        {
            //This one will check the users status
            return View();
        }

        
        public ActionResult reSendEmail()
        {
            //Will send email only to the users that haven't respond yet
            return View();
        }

        
        public ActionResult sendEmail()
        {
            //Send email to all users -- on request...
            MailDefinition md = new MailDefinition();
            md.From = "test@domain.com"; 
            md.IsBodyHtml = true; 
            md.Subject = "Test of MailDefinition"; 
            ListDictionary replacements = new ListDictionary(); 
            replacements.Add("", "Martin"); replacements.Add("", "Denmark"); string body = "Hello **You're from .";
            MailMessage msg = md.CreateMailMessage("you@anywhere.com", replacements, body, new System.Web.UI.Control());
            return View();
        }
    }
}

