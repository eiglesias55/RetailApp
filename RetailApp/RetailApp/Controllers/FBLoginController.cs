using RetailApp.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RetailApp.Controllers
{
    public class FBLoginController : ApiController
    {
        [HttpGet]
        public String Login(String Email, String NewEmail)
        {
            try
            {
                using (var csx = new RetailAppEntities()) {
                    USER u = csx.USER.SingleOrDefault(user => user.Email == Email);
                    csx.Entry(u).State = System.Data.Entity.EntityState.Modified;
                    if (Email != NewEmail) { u.EmailSecundario = NewEmail; }
                    u.Status = 3;
                    u.Fecha = DateTime.Now;
                    csx.SaveChanges();
                }
                return "Ok";
            }
            catch (Exception) {
                return "Error";
            }
        }
    }
}
