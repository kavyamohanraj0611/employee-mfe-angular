import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../state/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { loginEffects } from '../state/login.effects';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login',loginReducer),
    EffectsModule.forFeature([loginEffects])
  ]
})
export class LoginModule { }
