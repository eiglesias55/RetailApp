using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RetailApp.App_Start
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        
        public ActionResult Index()
        {
            //Should show main page with buttons: "Generar Token" 
            //List all users

            return View();
        }

        [Authorize(Users = "lprieto,mpaniego,wsaettone,mrfuentes,aleon,eiglesias")]
        public ActionResult generateToken()
        {   
            //Loop through all users asking if there's a token associated
            //Generate Token
            //Save it to the database

            string token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
            return View();
        }

        [Authorize(Users = "lprieto,mpaniego,wsaettone,mrfuentes,aleon,eiglesias")]
        public ActionResult checkStatus()
        {
            //This one will check the users status
            return View();
        }

        [Authorize(Users = "lprieto,mpaniego,wsaettone,mrfuentes,aleon,eiglesias")]
        public ActionResult reSendEmail()
        {
            //Will send email only to the users that haven't respond yet
            return View();
        }

        [Authorize(Users = "lprieto,mpaniego,wsaettone,mrfuentes,aleon,eiglesias")]
        public ActionResult sendEmail()
        {
            //Send email to all users -- on request...
            return View();
        }
    }
}
