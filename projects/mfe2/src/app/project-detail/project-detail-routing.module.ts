import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { TableComponent } from '../table/table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
},
{
    path: 'form2',
    component: ProjectDetailsComponent
},
{
  path:'details',
  component:TableComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule { }
