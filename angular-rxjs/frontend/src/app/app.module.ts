import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RawComponent } from './raw/raw.component';
import { FilteredComponent } from './filtered/filtered.component';
import { MoreFiltersComponent } from './more-filters/more-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    RawComponent,
    FilteredComponent,
    MoreFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
