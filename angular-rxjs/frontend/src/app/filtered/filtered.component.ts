import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Song } from '../song';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filtered',
  standalone: false,
  templateUrl: './filtered.component.html',
  styleUrl: './filtered.component.scss'
})

// Készítse el a megadott nevű komponenst, ami DI segítségével húzza be a szolgáltatást.
//  A megfelelő hookot használva vegye át a szolgáltatásból az elemeket (getFiltered).
//  A megjelenítéshez használjon feliratkozást (subscribe).

export class FilteredComponent implements OnInit, OnDestroy {
  songs!: Song[]
  private subscription!: Subscription
  constructor(private dataService : DataService){}
  ngOnInit(): void {
    this.subscription = this.dataService.getFiltered().subscribe( x =>{
      console.log(x)
      this.songs = x
    })
  }
  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
