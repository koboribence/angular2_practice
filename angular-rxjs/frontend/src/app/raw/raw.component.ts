import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../song';
import { DataService } from '../data.service';

@Component({
  selector: 'app-raw',
  standalone: false,
  templateUrl: './raw.component.html',
  styleUrl: './raw.component.scss'
})

// Készítse el a megadott nevű komponenst, ami DI segítségével húzza be a szolgáltatást. 
// A megfelelő hookot használva vegye át a szolgáltatásból az elemeket (getRaw).
// A megjelenítéshez használjon async pipe-ot.

export class RawComponent implements OnInit {
  songs$!: Observable<Song[]>;
  constructor(private dataService: DataService){
    
  }
  ngOnInit(): void {
    this.songs$ = this.dataService.getRaw()
  }
}
