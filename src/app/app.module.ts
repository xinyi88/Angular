import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

// step 1: create a file to store all router information
// step 2
// import router information
import {RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import {HttpModule} from '@angular/http';
import { ObjectToArrayPipe } from './pipe/object-to-array.pipe';
import { SearchResultComponent } from './search-result/search-result.component';
import { InteractionComponent } from './interaction/interaction.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    ObjectToArrayPipe,
    SearchResultComponent,
    InteractionComponent,
    VoterComponent,
    VotetakerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), // step 3
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
