import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsService } from './project-details.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReducerManager, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [ProjectDetailsService,ReducerManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
