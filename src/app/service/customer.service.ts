import {Injectable} from '@angular/core';
import {CustomerDTO} from "../dto/CustomerDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) {
  }

  public saveCustomer(dto: CustomerDTO): Observable<any> {
    return this._http.post('http://localhost:8080/api/v1/customer/admin/member', {
      id: dto.id,
      name: dto.name,
      address: dto.address,
      salary: dto.salary
    });
  }

}
