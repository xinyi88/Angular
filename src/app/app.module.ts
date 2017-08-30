import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import { ObjectToArrayPipe } from './pipe/object-to-array.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    ObjectToArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
