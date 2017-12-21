using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Aplikacja_Internetowa_Zdrowie_Aktywnosc.Models;
using System.Web;

namespace Aplikacja_Internetowa_Zdrowie_Aktywnosc.Controllers
{
    
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Message"] = "";

            return View();
        }

        public IActionResult WyborKategorii()
        {
            ViewData["Message"] = "";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
