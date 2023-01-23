import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicdetailsRoutingModule } from './basicdetails-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { HttpClientModule } from '@angular/common/http'
import { BasicDetailsService } from '../basic-details.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    BasicdetailsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar:true
    })
  ],
  providers: [BasicDetailsService]
})
export class BasicdetailsModule { }
