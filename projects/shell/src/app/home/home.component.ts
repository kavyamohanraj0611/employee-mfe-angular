import { Component } from '@angular/core';
import { BasicDetailsService } from 'projects/mfe1/src/app/basic-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private basicDetailService:BasicDetailsService){}
  ngOnInit(){
    this.basicDetailService.getEmployeeBasic()
      .subscribe(data => {
        console.log("Data ",data)
      })   
  }

}
