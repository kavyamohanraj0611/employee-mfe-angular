import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BasicDetailsService } from './basic-details.service';
import { ProjectDetailModule } from 'projects/mfe2/src/app/project-detail/project-detail.module';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProjectDetailModule,
    ReactiveFormsModule
  ],
  providers: [BasicDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
