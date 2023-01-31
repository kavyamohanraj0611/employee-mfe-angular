import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { basicDetailsEffect } from './state/basic.effect';
import { basicDetailReducer } from './state/basic.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BasicdetailsModule } from './basicdetails/basicdetails.module';
import { environment } from '../environments/environment';
import { ReducerManager } from '@ngrx/store';
import { ReducerManagerDispatcher } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge:25, 
      logOnly:environment.production
    }),
    EffectsModule.forRoot([]),
    BasicdetailsModule,
    NgxPaginationModule,
    MaterialModule
    
  ],
  providers: [ReducerManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
