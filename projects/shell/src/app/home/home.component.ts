import { Component } from '@angular/core';
import { BasicDetailsService } from 'projects/mfe1/src/app/basic-details.service';
import { employeeBasic } from 'projects/mfe1/src/app/employee-basic-model';
import { employeeProject } from 'projects/mfe2/src/app/employee-project-model';
import { ProjectDetailsService } from 'projects/mfe2/src/app/project-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){}
  ngOnInit(){}

}
