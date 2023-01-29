import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsService } from '../project-details.service';
import { TableComponent } from '../table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { projectDetailReducer } from '../state/project.reducer';
import { EffectsModule } from '@ngrx/effects';
import { projectDetailsEffect } from '../state/project.effects';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forFeature('projectDetails',projectDetailReducer),
    EffectsModule.forFeature([projectDetailsEffect])
  ],
  providers:[ProjectDetailsService]
})
export class ProjectDetailModule { }
