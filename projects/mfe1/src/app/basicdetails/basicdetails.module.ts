import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicdetailsRoutingModule } from './basicdetails-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { basicDetailReducer } from '../state/basic.reducer';
import { basicDetailsEffect } from '../state/basic.effect';

@NgModule({
  declarations: [
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    BasicdetailsRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('basicDetails',basicDetailReducer),
    EffectsModule.forFeature([basicDetailsEffect]),
  ],
  providers:[]
})
export class BasicdetailsModule { }
