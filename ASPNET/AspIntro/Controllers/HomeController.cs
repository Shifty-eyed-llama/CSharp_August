using Microsoft.AspNetCore.Mvc;

namespace AspIntro
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet("{name}")]
        public ViewResult Person(string name)
        {
            return View("Person", name);
        }

    }
}