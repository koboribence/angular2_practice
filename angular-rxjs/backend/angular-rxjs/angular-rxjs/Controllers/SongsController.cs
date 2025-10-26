using angular_rxjs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angular_rxjs.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Song>> GetAll()
        {
            return Ok(Songs);
        }
    }
}
