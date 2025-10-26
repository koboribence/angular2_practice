namespace angular_rxjs.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Artist { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public int Length { get; set; } // másodpercben
        public int Likes { get; set; }
        public string Link { get; set; } = string.Empty;
    }
}
