using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RetailApp.Database;

namespace RetailApp.Controllers
{
    public class QuestionnaireController : Controller
    {
        //
        // GET: /Questionnaire/

        public ActionResult Index()
        {

            using (var csx = new RetailAppEntities())
            {
                List<PREGUNTA> l = csx.PREGUNTA.ToList();
                ViewBag.quest = l;

                List<OPCION> h = csx.OPCION.ToList();
                ViewBag.opcs = h;
            }
            return View();    
            }
      
        }
    }

