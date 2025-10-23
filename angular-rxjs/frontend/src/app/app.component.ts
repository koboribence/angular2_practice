import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Song } from './song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend'
   songs$!: Observable<Song[]>;
  constructor(private ds: DataService) {
  }
  ngOnInit(): void {
     this.songs$ = this.ds.getRaw();
     console.log(this.songs$)
  }
}
