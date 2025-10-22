import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Song, SongService } from './song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-io';
  songs$: Observable<Song[]>;
  selectedSong: Song | null = null;
  constructor(private songService: SongService) {
    this.songs$ = this.songService.getSongs()
  }
  onSongSelected(song: Song):void {
    this.selectedSong = song;
  }
}
