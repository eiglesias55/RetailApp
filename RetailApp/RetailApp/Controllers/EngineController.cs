using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Facebook;

namespace RetailApp.Controllers
{
    public class EngineController : ApiController
    {  
        [HttpGet]
        public String SendData(String Token) {
            var client = new FacebookClient(Token);
            dynamic JsonLikes = client.Get("me/likes?fields=name,id,category_list&limit=1000");
            var likes = JsonLikes.data;
            Dictionary<string,int> categoriesDictionary = new Dictionary<string,int>();

            foreach (var like in likes)
                {
                    try
                    {
                        dynamic parentId = client.Get(like.category_list[0].id + "?fields=name,parent_ids");
                        string parentCategory = "";
                        try
                        {
                            while (parentId.parent_ids[0] != null) 
                            {
                                parentId = client.Get(parentId.parent_ids[0] + "?fields=name,parent_ids");
                                parentCategory = parentId.name;
                            }
                        }
                        catch (Exception) 
                        {
                            int cantidad;
                            if (categoriesDictionary.TryGetValue(parentCategory, out cantidad))
                            {
                                categoriesDictionary[parentCategory] = ++cantidad;
                            }
                            else 
                            {
                                categoriesDictionary.Add(parentCategory, 1);
                            }
                        }
                    }
                    catch (Exception) { 
                    }
                }                 
            return "Ok";
        }
    }
}
