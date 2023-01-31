import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { TableComponent } from '../table/table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
},
{
    path: 'form1',
    component: BasicDetailsComponent
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
export class BasicdetailsRoutingModule { }
