import { Component, Input } from '@angular/core';
import { Song } from '../song.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-detail',
  standalone: false,
  templateUrl: './song-detail.component.html',
  styleUrl: './song-detail.component.scss'
})
export class SongDetailComponent {
  @Input() song: Song | null = null;



}
