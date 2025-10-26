using angular_complex.Logic;
using angular_complex.Logic.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angular_complex.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongsController : ControllerBase
    {
        SongLogic logic;

        public SongsController(SongLogic logic)
        {
            this.logic = logic;
        }

        //[HttpGet("{id}")]
        //public Song GetSong(string id)
        //{
        //    return logic.GetSong(id);
        //}
        [HttpGet]
        public IEnumerable<Song> GetAll()
        {
            return logic.GetAllSongs();
        }
        [HttpPut("{id}")]
        [Authorize]
        public void UpdateSong(string id, [FromBody] Song dto)
        {
            logic.UpdateSong(id, dto);
        }
        [Authorize]
        [HttpPost]
        public IActionResult AddSong(Song s)
        {
            try
            {
                logic.AddSong(s);
            }
            catch (Exception e)
            {
                return BadRequest(new ErrorModel(e.Message));
            }
            return Ok();
        }
    }
}
