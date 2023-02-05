import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { employeeBasic } from '../employee-basic-model';
import { filterFormGroup } from '../filterFormGroup';
import { loadBasicDetails } from '../state/basic.action';
import { getAllBasicDetailState } from '../state/basic.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  details$!: Observable<employeeBasic[]>;
  details!: employeeBasic[];
  header: any;
  filterForm!: FormGroup;
  page: any;
  allDetails!: employeeBasic[];
  constructor(private store: Store,private router:Router) {
    this.filterForm = new FormGroup<filterFormGroup>({
      dept: new FormControl<string>('',{nonNullable:true})
    })
  }

  ngOnInit() {
    //using rxjs observables
    // this.basicDetailService.getEmployeeBasic()
    //   .subscribe(data => {
    //     // console.log("Data ", data)
    //     this.details = data;
    //     this.header = this.details[0];
    //   })

    this.store.dispatch(loadBasicDetails())
    this.details$=this.store.select(getAllBasicDetailState)
    // .subscribe((data) => {
    //   console.log("Dataaaa ", data);
    //   this.details = data
    //   if (this.details){
    //     this.allDetails = this.details
    //     this.header = this.details[0];
    //   }
    // })
  }

  onFilter() {
    this.store.dispatch(loadBasicDetails())
      this.store.select(getAllBasicDetailState).subscribe((data1:employeeBasic[])=>{
        this.details = data1?.filter((data:any) => this.filterForm.get("dept")?.value === data.employeeDepartment)
        this.page=1
        }
      )

    // this.details = []
    // const detail = from(this.allDetails)
    // const val = detail.pipe(filter(data => data.employeeDepartment === value))
    // val.subscribe((data) => {
    //   this.details.push(data)
    // })
    // this.basicDetailService.getEmployeeBasic()
    // .subscribe(data => {
    //   console.log("Data ", data)
    //   this.details = data;
    //   this.header = this.details[0];
    //   if(value)
    //   this.details = this.details.filter((data) => value === data.employeeDepartment)
    //   console.log("Details ", this.details);
    // })

  }

}
