import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form2',
    pathMatch: 'full'
},
{
    path: 'form2',
    component: ProjectDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule { }
