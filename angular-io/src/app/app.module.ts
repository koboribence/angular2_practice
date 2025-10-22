import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
