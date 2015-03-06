using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RetailApp.Controllers
{
    public class EngineController : ApiController
    {

        [HttpPost]
        public String SendData(String Token) {
            Console.WriteLine("Llego al sendData");
            //var client = new FacebookClient(Token);
            //dynamic result = client.Get("me", new { fields = "email,likes" });

            return "Ok";
        }
    }
}
