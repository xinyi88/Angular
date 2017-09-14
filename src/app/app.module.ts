import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';

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
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    ObjectToArrayPipe,
    SearchResultComponent,
    InteractionComponent,
    VoterComponent,
    VotetakerComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), // step 3
    BrowserModule,
    HttpModule,
    FormsModule, // this allows the application access to all of the template-driven forms feature, inlcude NgModule
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
