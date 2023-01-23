import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicdetailsRoutingModule } from './basicdetails-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';

@NgModule({
  declarations: [
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    BasicdetailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BasicdetailsModule { }
