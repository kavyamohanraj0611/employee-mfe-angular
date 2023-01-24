import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicdetailsRoutingModule } from './basicdetails-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { HttpClientModule } from '@angular/common/http'
import { BasicDetailsService } from '../basic-details.service';

@NgModule({
  declarations: [
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    BasicdetailsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BasicDetailsService]
})
export class BasicdetailsModule { }
