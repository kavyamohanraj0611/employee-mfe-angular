import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsService } from '../project-details.service';
import { TableComponent } from '../table/table.component';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ProjectDetailsService]
})
export class ProjectDetailModule { }
