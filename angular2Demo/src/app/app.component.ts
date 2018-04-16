import { Component , OnInit} from '@angular/core';
import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit  {
  employee : IEmployee[];
  statusMessage : string;
  id: number;
   newEmp: any;
   errorStat : string;

  constructor(private empserv : EmployeeService){
    this.newEmp = { name: null , followers: null,email:null,location:null };
  }
// a class constructor will automatically be called when the instance of the class is 
//created  

// ngOnInit is a life cycle hook method provided by angular, ngOnInit is called after the constructor and is generally used to perform task related to angular binding
// ngOnInit is the right place to fetch data from the server 
//task that are timeconsuming should be called in the ngOnInit method not the in the constructor

  ngOnInit(){
    this.empserv.getEmployees().subscribe((employeeData) => this.employee =  employeeData, (error) => {
      this.statusMessage = "Error in the service call";
      console.error(error);
    });
  }

  getExtraInfo(value){
    this.id = value.id; 
    console.log(this.id);
    this.empserv.getEmployeeById(this.id).then(
      (employeeData)=>{
        if(employeeData == null){
          this.errorStat = "Code is not correct";
        }else{
          this.newEmp = employeeData;
          console.log(this.newEmp);
        }
      }
    ).catch((error) => {
      this.errorStat = "Problem with service";
      console.log(error);
    })
  }

  // service call needs to be always called in the ngOnInit

  name = 'Angular 6';

}
