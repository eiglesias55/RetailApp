using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RetailApp.Database;
namespace RetailApp.Controllers
{
    public class RespuestasController : ApiController
    {
        [HttpGet]
        public string GuardarRespuestas(string Email, int IdPregunta, int NumeroOpcion)
        {
            try
            {
                using (var csx = new RetailAppEntities())
                {
                    RESPUESTA r = csx.RESPUESTA.SingleOrDefault(rta => rta.Email == Email && rta.Id == IdPregunta);
                    if (r != null){
                        csx.Entry(r).State = System.Data.Entity.EntityState.Modified;
                        r.Numero = NumeroOpcion; 
                    }else{
                        RESPUESTA resp = new RESPUESTA { Email = Email, Numero = NumeroOpcion, Id = IdPregunta };
                        csx.RESPUESTA.Add(resp);                  
                    }
                    csx.SaveChanges();
                }
                return "Ok";
            }
            catch(Exception) {
                return ("Error");
            }
        }
    }
}
