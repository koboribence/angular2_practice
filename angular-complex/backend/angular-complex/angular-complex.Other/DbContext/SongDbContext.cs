using angular_complex.Logic.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace angular_complex.Logic.DbContext
{
    public class SongDbContext : IdentityDbContext
    {
        public DbSet<Song> Songs { get; set; }
        public SongDbContext(DbContextOptions<SongDbContext> ctx) : base(ctx) { Database.EnsureCreated(); }
        public SongDbContext()
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Song>().HasData(
                new Song {Id="f48as", Artist = "John Doe", Title = "Chill Vibes", Length = 180, Likes = 25, Link = "https://youtube.com/..." },
                new Song { Id = "a94bc",  Artist = "Jane Smith", Title = "Morning Flow", Length = 200, Likes = 12, Link = "https://spotify.com/..." }
            );
        }
    }
}
