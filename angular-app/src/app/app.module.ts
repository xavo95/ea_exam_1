import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { SubjectFormComponent } from './subject-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
