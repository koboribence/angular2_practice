using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace angular_complex.Logic.Entities
{

        public class Song : IIdEntity
    {
        public Song()
        {
            Id = Guid.NewGuid().ToString();
        }
        public Song(string artist, string title, int length, int likes, string link)
        {
            Id = Guid.NewGuid().ToString();
            Title = title;
            Length = length;
            Likes = likes;
            Link = link;
        }
        [JsonIgnore]
        public  string Id { get; set; }
            public string Artist { get; set; } = string.Empty;
            public string Title { get; set; } = string.Empty;
            public int Length { get; set; }
            public int Likes { get; set; }
            public string Link { get; set; } = string.Empty;


    }
}
