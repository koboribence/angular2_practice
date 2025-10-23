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

export class MoreFiltersComponent implements OnInit {
  songs$!: Observable<Song[]>
  averageLength$!: Observable<number>
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.songs$ = this.dataService.getRaw()
    this.getAverageLength()
  }
  getAverageLength(): void {
    // A komponens html részébe kösse ki a metódusokat, javasolt async pipe-ot használni => nem működik valamiért, így inkább külön változóból teszem ki, később lehet javítom
    this.averageLength$ =  this.songs$.pipe(
      map(songs => {
        const total = songs.reduce((acc, song) => acc + song.length, 0);
        return total / songs.length;
      })
    );
  }
}
