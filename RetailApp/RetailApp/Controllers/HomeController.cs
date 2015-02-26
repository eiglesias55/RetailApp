using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Linq;
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

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult loginWithEmail(FormCollection form)
        {
            using (var usr = new RetailAppEntities2())
            {

                var email = form["email"].ToString();
                /*var text = usr.USER.Where(m => m.Email == form["inputEmail3"]);*/
                
                /*if(){
                    
                }
                             
                    var msg = new MailMessage();
                    msg.To.Add(user.Email);
                    msg.IsBodyHtml = false;
                    msg.Subject = "Test email";
                    msg.Body = "Hola " + user.Apellido + ", " + user.Nombre + " te ganaste un premio.. ";
                    SmtpClient smtpClient = new SmtpClient();
                    smtpClient.Send(msg);            
            }*/
                return RedirectToAction("Index");
            }
        }
        }
}
