import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MyFirstLibraryComponent } from './my-first-library.component';



@NgModule({
  declarations: [MyFirstLibraryComponent],
  imports: [
    HttpClientModule
  ],
  exports: [MyFirstLibraryComponent]
})
export class MyFirstLibraryModule { }
