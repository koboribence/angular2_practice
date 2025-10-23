import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { map, Observable } from 'rxjs';
import { Song } from '../song';

@Component({
  selector: 'app-more-filters',
  standalone: false,
  templateUrl: './more-filters.component.html',
  styleUrl: './more-filters.component.scss'
})

// Készítse el a megadott nevű komponenst, ami DI segítségével húzza be a szolgáltatást.
//  A megfelelő hookot használva vegye át a szolgáltatásból az elemeket (getRaw).
//  Készítse el a következő metódusokat, amelyek a már átvett zeneszámokat további feltételek mentén szűri / leválogatja RxJS operátorok felhasználásával.

// !!!!!!!!!!!!!!
// A feladatban azt írja, hogy a metódusokat ki kell kötni a html-be, de valamiért így nem akarta megjeleníteni az adatokat, így külön változóbol viszem ki html-be, később lehet javítom!
// !!!!!!!!!!!!!!

export class MoreFiltersComponent implements OnInit {

  songs$!: Observable<Song[]>
  averageLength$!: Observable<number>
  titles$!: Observable<string[]>
  randomSong$!: Observable<Song>
  firstSong$!: Observable<Song>

  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.songs$ = this.dataService.getRaw()
    this.getAverageLength()
    this.getTitles()
    this.getRandomSong()
    this.getFirstSong()
  }
  getAverageLength(): void {
    this.averageLength$ = this.songs$.pipe(
      map(songs => {
        const total = songs.reduce((acc, song) => acc + song.length, 0)
        return total / songs.length
      })
    );
  }
  getTitles(): void {
    this.titles$ = this.songs$.pipe(
      map(songs => songs.map(song => song.title)
      )
    )
  }
  getRandomSong(): void {
     this.randomSong$ = this.songs$.pipe(
      map(songs => {
        const index = Math.floor(Math.random() * songs.length)
        return songs[index]
      })
    );
  }
  getFirstSong(): void{
    this.firstSong$ = this.songs$.pipe(
      map(songs =>{
        return songs[0]
      })
    )
  }
}
