import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { employeeProject } from '../employee-project-model';
import { ProjectDetailsService } from '../project-details.service';
import { loadProjectDetails } from '../state/project.action';
import { getAllProjectDetailsState } from '../state/project.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  details!:employeeProject[] 
  header:any;
  page!:number;
  constructor(private store:Store){}
  ngOnInit(){
    // this.projectDetailService.getEmployeeProject()
    // .subscribe(data => {
    //   console.log("Data ",data)
    //   this.details=data;
    //    this.header=this.details[0];
    // })
    this.store.dispatch(loadProjectDetails())
      this.store.select(getAllProjectDetailsState).subscribe((data)=>{
        console.log("Dataaaa ",data);
        this.details = data?.projectDetails
        if(this.details)
        this.header = this.details[0];
      })
  }

}
