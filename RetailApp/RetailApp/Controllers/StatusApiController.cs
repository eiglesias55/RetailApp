using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RetailApp.Database;

namespace RetailApp.Controllers
{
    public class StatusApiController : ApiController
    {
        [HttpGet]
        public String GetStatus(String id) {
            using (var csx = new RetailAppEntities2()) {
                USER user = csx.USER.Where(u => u.Token == id).SingleOrDefault();
                if (user != null)
                {
                    return user.Nombre;
                }
                else {
                    return "No se encontro el usuario especificado.";
                }
            }
        }
    }
}
