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
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        
        public ActionResult Index()
        {
           
            using (var usr = new RetailAppEntities())
            {
                List<USER> l = usr.USER.ToList();
                ViewBag.Listado= l;
            }
            return View();
        }


        public ActionResult generateToken()
        {
            using (var usr = new RetailAppEntities())
            {
                List<USER> l = usr.USER.Where(m => m.Token == "").ToList();
                foreach (USER user in l) {
                    usr.Entry(user).State = System.Data.Entity.EntityState.Modified;
                    
                    string token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
                    token = token.Replace("/","");
                    token = token.Replace("=", "");
                    token = token.Replace("+", "");
                    user.Token = token;
                    user.Fecha = DateTime.Now;

                    usr.SaveChanges();
                }
                
                ViewBag.Listado = l;
            }

            return RedirectToAction("Index");
        }

        
        public ActionResult Status(String Status)
        {
            using (var csx = new RetailAppEntities())
            {
                List<STATUS> stats = csx.STATUS.ToList<STATUS>();
                ViewBag.status = stats;

                if (Status == null)
                {
                    //This one will check the users status
                    List<USER> l = csx.USER.ToList();
                    ViewBag.Listado = l;
                }
                else
                {
                    int status_int = int.Parse(Status);
                    List<USER> l = csx.USER.Where(user => user.Status == status_int).ToList();
                    ViewBag.Listado = l;
                }
            }
            
            return View();
            
        }

        
        public ActionResult reSendEmail()
        {
            //Send email to all users -- on request...
            using (var csx = new RetailAppEntities())
            {
                var dateTime = DateTime.Now.AddDays(-7);
                List<USER> l = csx.USER.Where(m => m.Status == 0 && m.Fecha > dateTime).ToList();
                foreach (USER user in l)
                {
                    csx.Entry(user).State = System.Data.Entity.EntityState.Modified;
                    user.Status = 1;
                    var msg = new MailMessage();
                    msg.To.Add(user.Email);
                    msg.IsBodyHtml = false;
                    msg.Subject = "Re send email after 7 days, test";
                    msg.Body = "Hola " + user.Nombre + ", " + user.Apellido + " No olvides ingresar a la aplicacion desde el siguiente link " + "Click on the following link:  http://localhost:49877/?Token=" + user.Token;
                    SmtpClient smtpClient = new SmtpClient();
                    smtpClient.Send(msg);
                    csx.SaveChanges();

                }
            }
            return RedirectToAction("Index");         
        }

        
        public ActionResult sendEmail()
        {
            //Send email to all users -- on request...
            using (var csx = new RetailAppEntities())
            {
                List<USER> l = csx.USER.Where(m => m.Status == 0).ToList();
                foreach (USER user in l)
                {
                    csx.Entry(user).State = System.Data.Entity.EntityState.Modified;
                    user.Status = 1;
                    user.Fecha = DateTime.Now;
                    var msg = new MailMessage();
                    msg.To.Add(user.Email);
                    msg.IsBodyHtml = false;
                    msg.Subject ="Test email";
                    msg.Body = "Hola " + user.Nombre + " " + user.Apellido + " Ingresa a la aplicacion a traves del siguiente link y gana un premio" + "Click on the following link:  http://localhost:49877/?Token=" + user.Token;
                    SmtpClient smtpClient = new SmtpClient();
                    smtpClient.Send(msg);
                    csx.SaveChanges();
                    
                }
            }
            return RedirectToAction("Index");         

        }
    }
}

