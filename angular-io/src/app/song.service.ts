import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }
  getSongs(): Observable<Song[]>
  {
    //API hívás szimulálása, az "of" egy RxJS kulcsszó, amivel Observable-ket adunk vissza (adatfolyamokat, ahogyan a feladat írja) 
    return of([
      {
        id: 1,
        title: 'Tavaszi Szél',
        artist: 'Omega',
        album: 'Élő Koncert',
        year: 1973,
        duration: '4:12'
      },
      {
        id: 2,
        title: 'Az Éj Még Soha Nem Volt Ilyen Sötét',
        artist: 'Kispál és a Borz',
        album: 'Sika, Kasza, Léc',
        year: 1995,
        duration: '3:47'
      },
      {
        id: 3,
        title: 'Olyan Ő',
        artist: 'Bagossy Brothers Company',
        album: 'A Nap Felé',
        year: 2017,
        duration: '3:58'
      },
      {
        id: 4,
        title: 'Valami Amerika',
        artist: 'Bon Bon',
        album: 'Valami Amerika',
        year: 2002,
        duration: '4:05'
      },
      {
        id: 5,
        title: '8 óra munka',
        artist: 'Beatrice',
        album: 'Beatrice 78–88',
        year: 1988,
        duration: '3:29'
      }
    ]).pipe(delay(1000)); // 1 másodperc késleltetés, az API hívás szimulálása miatt

    //ha valódi API hívás lenne: (ehhez a konstruktorba egy HttpClient-et kell injektálni)
    // return this.http.get<Song[]>(this.apiUrl);
  }
}
export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  duration: string;
}