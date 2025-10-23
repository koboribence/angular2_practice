import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './song';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:5020/api/songs"

  constructor(private http: HttpClient) { }

  getRaw(): Observable<Song[]>{ 
    return this.http.get<Song[]>(this.apiUrl)
  }

}