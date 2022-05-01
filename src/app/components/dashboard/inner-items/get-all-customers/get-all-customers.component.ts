import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../service/customer.service";

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent implements OnInit {
  list:Array<any> = [];

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData() {
    this._customerService.loadAll().subscribe(response => {
      this.list = response.data;
    }, error => {
      console.log(error)
    })
  }

}
