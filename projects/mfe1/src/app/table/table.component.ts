import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicDetailsService } from '../basic-details.service';
import { employeeBasic } from '../employee-basic-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  details!: employeeBasic[]
  header: any;
  filterForm!: FormGroup
  constructor(private basicDetailService: BasicDetailsService) {
    this.filterForm = new FormGroup({
      dept: new FormControl('')
    })
  }

  ngOnInit() {
    this.basicDetailService.getEmployeeBasic()
      .subscribe(data => {
        console.log("Data ", data)
        this.details = data;
        this.header = this.details[0];
      })
  }

  filter() {
    console.log("Inn", this.filterForm.get("dept")?.value);
    const value = this.filterForm.get("dept")?.value
    this.basicDetailService.getEmployeeBasic()
      .subscribe(data => {
        console.log("Data ", data)
        this.details = data;
        this.header = this.details[0];
        this.details = this.details.filter((data) => value === data.employeeDepartment)
        console.log("Details ", this.details);
      })

  }

}
