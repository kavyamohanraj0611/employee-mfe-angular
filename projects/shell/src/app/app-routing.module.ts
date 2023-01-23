import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent,
  //   pathMatch:'full'
  // },
  {
    path: 'basic',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: "http://localhost:4300/remoteEntry.js",
      exposedModule: './Module'
    })
      .then((m) => m.BasicdetailsModule)
  },
  {
    path: "project",
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: "http://localhost:4400/remoteEntry.js",
        exposedModule: './Module',
      }).then((m) => m.ProjectDetailModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
