using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Facebook;
using RetailApp.Database;


namespace RetailApp.Controllers
{

    public struct CategoryLikes
    {
        public String categoryName;
        public int likesQuantity;
    }

    public class EngineController : ApiController
    {

        public Dictionary<String, int> createFacebookCategoriesList()
        {

            Dictionary<String, int> fbCategoriesList = new Dictionary<String, int>();
            fbCategoriesList.Add("Food & Restaurant",0);
            fbCategoriesList.Add("Health",0);
            fbCategoriesList.Add("Education", 0);
            fbCategoriesList.Add("Arts",0);
            fbCategoriesList.Add("Technology", 0);
            fbCategoriesList.Add("Music Entertainment", 0);
            fbCategoriesList.Add("TV & Movies Entertainment", 0);
            fbCategoriesList.Add("Books & Magazines Entertainment", 0);
            fbCategoriesList.Add("Community & Government",0);
            fbCategoriesList.Add("Professional Services",0);
            fbCategoriesList.Add("Shopping & Retail",0);
            fbCategoriesList.Add("Sports & Recreation",0);
            fbCategoriesList.Add("Travel & Transportation",0);
            fbCategoriesList.Add("Home",0);
            fbCategoriesList.Add("Outdoors",0);
            fbCategoriesList.Add("Nightlife",0);

            return fbCategoriesList;
        }

        public Dictionary<String,int> getCategoryLikeList(dynamic userLikes,Dictionary<String,int> categoryLikesList) 
        {        
            foreach(var userLike in userLikes)
            {
                int quantity;
                if (userLike.category == "Food" || userLike.category == "Food/beverages" || userLike.category == "Food/beverages" || userLike.category == "Food/grocery" || userLike.category == "Restaurant/café" || userLike.category == "Chef" || userLike.category == "Kitchen/cooking")
                { 
                   categoryLikesList.TryGetValue("Food & Restaurant", out quantity);
                   categoryLikesList["Food & Restaurant"] = categoryLikesList["Food & Restaurant"] + 1;

                }else if(userLike.category =="Health/beauty"|| userLike.category =="Health/medical/pharmaceuticals"|| userLike.category =="Health/medical/pharmaceuticals"|| userLike.category =="Health/medical/pharmacy"|| userLike.category =="Health/wellness website"|| userLike.category =="Hospital/clinic"|| userLike.category =="Doctor"|| userLike.category =="Spas/beauty/personal care")
                {
                    categoryLikesList.TryGetValue("Health", out quantity);
                   categoryLikesList["Health"] = categoryLikesList["Health"] + 1;
                }
                else if (userLike.category == "Education" || userLike.category == "Education website" || userLike.category == "University" || userLike.category == "School")
                {
                    categoryLikesList.TryGetValue("Education", out quantity);
                    categoryLikesList["Education"] = categoryLikesList["Education"] + 1;
                }
                else if (userLike.category == "Computers" || userLike.category == "Computers/internet website" || userLike.category == "Computers/technology" || userLike.category == "Games/toys" || userLike.category == "Electronics" || userLike.category == "Internet/software" || userLike.category == "News/media website" || userLike.category == "Website")
                {
                    categoryLikesList.TryGetValue("Technology", out quantity);
                    categoryLikesList["Technology"] = categoryLikesList["Technology"] + 1;
                }
                else if (userLike.category == "Artist" || userLike.category == "Museum/art gallery" || userLike.category == "Arts/entertainment/nightlife" || userLike.category == "Arts/entertainment/nightlife" || userLike.category == "Arts/humanities website")
                {
                    categoryLikesList.TryGetValue("Arts", out quantity);
                    categoryLikesList["Arts"] = categoryLikesList["Arts"] + 1;
                }
                else if (userLike.category == "Music" || userLike.category == "Music award" || userLike.category == "Music chart" || userLike.category == "Music video" || userLike.category == "Musical genre" || userLike.category == "Musical instrument" || userLike.category == "Musician/band" || userLike.category == "Playlist")
                {
                    categoryLikesList.TryGetValue("Music Entertainment", out quantity);
                    categoryLikesList["Music Entertainment"] = categoryLikesList["Music Entertainment"] + 1;
                }
                else if (userLike.category == "Movie" || userLike.category == "Movie general" || userLike.category == "Movie genre" || userLike.category == "Movie theater" || userLike.category == "Movies/music " || userLike.category == "Tv" || userLike.category == "Tv channel" || userLike.category == "Tv genre" || userLike.category == "Tv network" || userLike.category == "Tv show" || userLike.category == "Tv/movie award" || userLike.category == "Episode")
                {
                    categoryLikesList.TryGetValue("TV & Movies Entertainment", out quantity);
                    categoryLikesList["TV & Movies Entertainment"] = categoryLikesList["TV & Movies Entertainment"] + 1;
                }
                else if (userLike.category == "Book" || userLike.category == "Book genre" || userLike.category == "Magazine" || userLike.category == "Media/news/publishing")
                {
                    categoryLikesList.TryGetValue("Books & Magazines Entertainment", out quantity);
                    categoryLikesList["Books & Magazines Entertainment"] = categoryLikesList["Books & Magazines Entertainment"] + 1;
                }
                else if(userLike.category =="Community"|| userLike.category =="Community organization"|| userLike.category =="Community organization"|| userLike.category =="Community/government"|| userLike.category =="Company"|| userLike.category =="Government official"|| userLike.category =="Government organization"|| userLike.category =="Government website"|| userLike.category =="Political ideology"|| userLike.category =="Political organization"|| userLike.category =="Political party"|| userLike.category =="Politician"|| userLike.category =="Organization")
                {
                    categoryLikesList.TryGetValue("Community & Government", out quantity);
                   categoryLikesList["Community & Government"] = categoryLikesList["Community & Government"] + 1;
                }
                else if(userLike.category =="Product/service"|| userLike.category =="Professional services"|| userLike.category =="Professional services"|| userLike.category =="Business person"|| userLike.category =="Business services"|| userLike.category =="Business/economy website"|| userLike.category =="Bank/financial institution"|| userLike.category =="Bank/financial services"|| userLike.category =="Consulting/business services"|| userLike.category =="Small business"|| userLike.category =="Local business"|| userLike.category =="Software")
                {
                    categoryLikesList.TryGetValue("Professional Services", out quantity);
                   categoryLikesList["Professional Services"] = categoryLikesList["Professional Services"] + 1;
                }
                else if(userLike.category =="Shopping/retail"|| userLike.category =="Book store"|| userLike.category =="Book store"|| userLike.category =="Retail and consumer merchandise"|| userLike.category =="Clothing"|| userLike.category =="Library")
                {
                    categoryLikesList.TryGetValue("Shopping & Retail", out quantity);
                   categoryLikesList["Shopping & Retail"] = categoryLikesList["Shopping & Retail"] + 1;
                }
                else if(userLike.category =="Coach"|| userLike.category =="Amateur sports team"|| userLike.category =="Amateur sports team"|| userLike.category =="Recreation/sports website"|| userLike.category =="Athlete"|| userLike.category =="School sports team"|| userLike.category =="Sport"|| userLike.category =="Sports league"|| userLike.category =="Sports venue"|| userLike.category =="Sports/recreation/activities"|| userLike.category =="Professional sports team")
                {
                    categoryLikesList.TryGetValue("Sports & Recreation", out quantity);
                   categoryLikesList["Sports & Recreation"] = categoryLikesList["Sports & Recreation"] + 1;
                }
                else if( userLike.category =="Transport/freight"|| userLike.category =="Transportation"|| userLike.category =="Transportation"|| userLike.category =="Travel/leisure"|| userLike.category =="Automobiles and parts"|| userLike.category =="Cars"|| userLike.category =="Concert tour"|| userLike.category =="Airport"|| userLike.category =="Tours/sightseeing"|| userLike.category =="Transit stop"|| userLike.category =="Hotel"|| userLike.category =="Local/travel website")
                {
                    categoryLikesList.TryGetValue("Travel & Transportation", out quantity);
                   categoryLikesList["Travel & Transportation"] = categoryLikesList["Travel & Transportation"] + 1;
                }
                else if( userLike.category =="Home decor"|| userLike.category =="Home improvement"|| userLike.category =="Home improvement"|| userLike.category =="Home/garden website"|| userLike.category =="Pet services"|| userLike.category =="Pet supplies"|| userLike.category =="Neighborhood")
                {
                    categoryLikesList.TryGetValue("Home", out quantity);
                   categoryLikesList["Home"] = categoryLikesList["Home"] + 1;
                }
                else if (userLike.category == "Outdoor gear/sporting goods" || userLike.category == "Patio/garden" || userLike.category == "Patio/garden" || userLike.category == "Animal" || userLike.category == "Animal breed"
)
                {
                    categoryLikesList.TryGetValue("Outdoors", out quantity);
                   categoryLikesList["Outdoors"] = categoryLikesList["Outdoors"] + 1;
                }else if(userLike.category =="Club"|| userLike.category =="Bar"|| userLike.category =="Bar"|| userLike.category =="Drink"|| userLike.category =="Drugs")
                {
                    categoryLikesList.TryGetValue("Nightlife", out quantity);
                   categoryLikesList["Nightlife"] = categoryLikesList["Nightlife"] + 1;
                }
            }
            return categoryLikesList;
        }

        

        [HttpGet]
        public String SendData(String Token, String UserToken)
        {
            var client = new FacebookClient(Token);
            dynamic JsonLikes = client.Get("me/likes?fields=name,id,category&limit=1000");
            var userLikes = JsonLikes.data;

            Dictionary<String, int> facebookCategories = createFacebookCategoriesList();

            Dictionary<String, int> categoryLikesList = getCategoryLikeList(userLikes, facebookCategories);
            
            String url = "Prize";
            if (categoryLikesList.Count == 0)
            {
                url = "Questionnaire";
            }
            else
            {
                List<KeyValuePair<string, int>> categoryList = categoryLikesList.ToList();
                KeyValuePair<string, int> actual = categoryList[0];
                foreach (KeyValuePair<string, int> category in categoryList)
                {
                    if (category.Value > actual.Value)
                    {
                        actual = category;
                    }
                }
                using (var csx = new RetailAppEntities())
                {
                    USER u = csx.USER.SingleOrDefault(m => m.Token == UserToken);
                    if (u != null)
                    {
                        csx.Entry(u).State = System.Data.Entity.EntityState.Modified;
                        u.Perfil = actual.Key;
                    }
                    csx.SaveChanges();
                }
            }
            return url;
        }

    }
}
