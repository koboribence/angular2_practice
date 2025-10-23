export class Song {
  id: number;
  artist: string;
  title: string;
  length: number; // másodpercben
  likes: number;

  constructor(id: number, artist: string, title: string, length: number, likes: number) {
    this.id = id;
    this.artist = artist;
    this.title = title;
    this.length = length;
    this.likes = likes;
  }
}