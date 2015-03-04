using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RetailApp.Database;
using System.Web.UI.WebControls;
using System.Collections.Specialized;
using System.Net.Mail;
using System.Text.RegularExpressions;


namespace RetailApp.App_Start
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index(String Token)
        {

            var TokenCookie = new HttpCookie("Token");
            TokenCookie.Value = Token;
            TokenCookie.Expires = DateTime.Now.AddDays(90);
            Response.Cookies.Add(TokenCookie);

            if (Token != null)
            {
                using (var csx = new RetailAppEntities())
                {
                    USER u = csx.USER.SingleOrDefault(user => user.Token == Token);
                    ViewBag.userEmail = u.Email;
                    if (u.Status == 1)
                    {
                        csx.Entry(u).State = System.Data.Entity.EntityState.Modified;
                        u.Status = 2;
                        u.Fecha = DateTime.Now;
                        csx.SaveChanges();
                    }
                }
                return View();
            }
            else {
                if (Request.Cookies["Token"].Value != null)
                {
                    return RedirectToAction("Index", new { Token = Request.Cookies["Token"].Value });
                }
                else 
                {
                    throw new ApplicationException("El token es invalido, Por favor acceda desde el link en su mail.");
                }
                
            }
            
        }


        [HttpPost]
        public ActionResult EmailLogin(String Email, String Token)
        {
            using (var csx = new RetailAppEntities()) {
                USER u = csx.USER.SingleOrDefault(user => user.Token == Token);
                if (u != null)
                {
                    bool validEmail;
                    try
                    {
                        MailAddress m = new MailAddress(Email);

                        validEmail = true;
                    }
                    catch (FormatException)
                    {
                        validEmail = false;
                    }

                    if (Email != "" && validEmail)
                    {
                        csx.Entry(u).State = System.Data.Entity.EntityState.Modified;
                        var recordEmail = string.Compare(Email, u.Email);
                        if (recordEmail != 0)
                        {
                            u.EmailSecundario = Email;
                        }
                        u.Status = 4;
                        u.Fecha = DateTime.Now;
                        csx.SaveChanges();
                    }
                    else { 
                        throw new ApplicationException("Email incompleto o invalido.");
                    }
                }
                else {
                    
                }
            }
            return RedirectToAction("Index","Questionnaire");

        }
        }
}
