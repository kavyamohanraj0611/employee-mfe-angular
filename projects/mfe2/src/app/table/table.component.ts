import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeProject } from '../employee-project-model';
import { ProjectDetailsService } from '../project-details.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  details!:employeeProject[] 
  header:any;
  constructor(private projectDetailService:ProjectDetailsService){}
  ngOnInit(){
    this.projectDetailService.getEmployeeProject()
    .subscribe(data => {
      console.log("Data ",data)
      this.details=data;
       this.header=this.details[0];
    })
  }

}
