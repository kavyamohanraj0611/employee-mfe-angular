import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BasicDetailsService } from '../basic-details.service';
import { employeeBasic } from '../employee-basic-model';
import { loadBasicDetails } from '../state/basic.action';
import { getAllBasicDetailState } from '../state/basic.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  details!: employeeBasic[];
  header: any;
  filterForm!: FormGroup;
  page:any;
  maxSize:number=2
  constructor(private store:Store) {
    this.filterForm = new FormGroup({
      dept: new FormControl('')
    })
  }

  ngOnInit() {
    // this.basicDetailService.getEmployeeBasic()
    //   .subscribe(data => {
    //     // console.log("Data ", data)
    //     this.details = data;
    //     this.header = this.details[0];
    //   })

      // console.log("Store ",this.store.select);
      this.store.dispatch(loadBasicDetails())
      this.store.select(getAllBasicDetailState).subscribe((data)=>{
        console.log("Dataaaa ",data);
        this.details = data.basicDetails
        if(this.details)
        this.header = this.details[0];
      })
      
  }

  filter() {
    console.log("Inn", this.filterForm.get("dept")?.value);
    const value = this.filterForm.get("dept")?.value

    this.store.dispatch(loadBasicDetails())
      this.store.select(getAllBasicDetailState).subscribe((data)=>{
        console.log("Dataaaa ",data);
        this.details = data.basicDetails
        if(this.details)
        this.header = this.details[0];
        if(value)
        this.details = this.details.filter((data) => value === data.employeeDepartment)
        console.log("Details ", this.details);
      })


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
