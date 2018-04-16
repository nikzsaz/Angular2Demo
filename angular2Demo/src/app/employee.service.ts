import { Injectable } from "@angular/core";
import { IEmployee } from "./employee"
import { Http , Response} from "@angular/http";
import { Observable  } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
// future proofs keep the injectable property
//since we have injected a property of the http so we now very much needed the Http 

// @injectable property

@Injectable()
export class EmployeeService{  
// always declare private variable with the under score
  constructor(private _http: Http){

  }

// this id the one that is needed
  getEmployees(): Observable<IEmployee[]> {    return this._http.get("https://api.github.com/users?access_token=2135501e511afe5ef0ed9866e31bd15f325bab7f")
                      .map((response: Response) =>
                       <IEmployee[]>response.json())
                       .catch(this.handleError);
  }

  getEmployeeById(empCode:number): Promise<any> {
    return this._http.get("https://api.github.com/users/"+ empCode +
    "?access_token=2135501e511afe5ef0ed9866e31bd15f325bab7f")
            .map((response: Response) => <any>response.json())
            .toPromise()
            .catch(this.handlePromiseError);
  }

  handlePromiseError(error: Response){
    //console.log(error);
    throw(error);
  }

  handleError(error: Response){
    console.error(error);
    // this is used to throw the rror back
    return Observable.throw(error);
  }

}