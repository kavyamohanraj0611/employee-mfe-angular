import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectDetailModule { }
