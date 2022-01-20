using Microsoft.AspNetCore.Mvc;
using IS413_M2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IS413_M2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeScale()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GradeScale(GradeScale model)
        {
            return View();
        }
    }
}
