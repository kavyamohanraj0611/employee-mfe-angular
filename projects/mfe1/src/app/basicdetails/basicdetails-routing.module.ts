import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsComponent } from '../basic-details/basic-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form1',
    pathMatch: 'full'
},
{
    path: 'form1',
    component: BasicDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicdetailsRoutingModule { }
