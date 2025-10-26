using angular_complex.Logic.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace angular_complex.Logic
{
    public class SongLogic
    {
        private Repository<Song> repo;

        public SongLogic(Repository<Song> repo)
        {
            this.repo = repo;
        }

        public Song GetSong(string id)
        {
            var model = repo.FindById(id);
            return model;
        }
        public void UpdateSong(string id, Song s)
        {
            var old = repo.FindById(id);
            repo.Update(old);
        }
        public void AddSong(Song s)
        {
            if (repo.GetAll().FirstOrDefault(x => x.Title == s.Title) == null)
            {
                repo.Create(s);
            }
            else
            {
                throw new ArgumentException("Ilyen névvel már létrehoztak kirándulást!");
            }
        }
        public IEnumerable<Song> GetAllSongs()
        {
            return repo.GetAll();
        }
        public void DeleteSong(string id)
        {
            repo.DeleteById(id);
        }
    }
}
