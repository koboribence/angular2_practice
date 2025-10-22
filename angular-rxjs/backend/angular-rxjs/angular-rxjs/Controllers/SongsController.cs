using angular_rxjs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angular_rxjs.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongsController : ControllerBase
    {
        private static readonly List<Song> Songs = new()
        {
            new Song { Id = 1, Artist = "Daft Punk", Title = "Harder Better Faster Stronger", Length = 224, Likes = 5 },
            new Song { Id = 2, Artist = "The Weeknd", Title = "Blinding Lights", Length = 200, Likes = 1200 },
            new Song { Id = 3, Artist = "Imagine Dragons", Title = "Believer", Length = 204, Likes = 6 },
            new Song { Id = 4, Artist = "Adele", Title = "Rolling in the Deep", Length = 228, Likes = 5 },
            new Song { Id = 5, Artist = "Coldplay", Title = "Viva La Vida", Length = 242, Likes = 1030 },
            new Song { Id = 6, Artist = "Ed Sheeran", Title = "Shape of You", Length = 233, Likes = 255 },
            new Song { Id = 7, Artist = "Linkin Park", Title = "Numb", Length = 185, Likes = 1450 },
            new Song { Id = 8, Artist = "Billie Eilish", Title = "Bad Guy", Length = 194, Likes = 9 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Song>> GetAll()
        {
            return Ok(Songs);
        }
    }
}
