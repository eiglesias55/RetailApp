using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Facebook;
using System.Collections.Generic;

namespace RetailApp.Controllers
{
    public class EngineController : ApiController
    {  
        [HttpGet]
        public String SendData(String Token) {
            var client = new FacebookClient(Token);
            dynamic JsonLikes = client.Get("me/likes");
            dynamic JsonCategories = client.Get("search?type=placetopic&topic_filter=all&fields=id,name,parent_ids");
            var categories = JsonCategories.data;
            var likes = JsonLikes.data;
            Dictionary<string,int> categoriesDictionary = new Dictionary<string,int>();
            foreach(var category in categories){
                try
                {
                    categoriesDictionary.Add((String)category.name, 0);
                }
                catch (ArgumentException)
                {
                    //No lo agrega
                }
            }
            foreach (var like in likes)
                {
                    int cantidad;
                    if (categoriesDictionary.TryGetValue((String)like.category,out cantidad)) { 
                       categoriesDictionary[(String)like.category] = cantidad++;
                    };
                }                 
            return "Ok";
        }
    }
}
