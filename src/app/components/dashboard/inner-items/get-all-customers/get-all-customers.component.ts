import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../service/customer.service";

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent implements OnInit {
  list: any[] = [];

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData() {
    this._customerService.loadAll().subscribe(response => {
      console.log(response)
      this.list = response;
    }, error => {
      console.log(error)
    })
  }

}
