import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyFirstLibraryModule } from 'my-first-library';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFirstLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
