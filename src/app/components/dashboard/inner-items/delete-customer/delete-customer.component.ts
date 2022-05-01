import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../service/customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

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


  delete(id: string) {
    if (confirm('Are You sure')) {
      this._customerService.deleteCustomer(id).subscribe(response => {
        console.log(response);
        this.loadAllData();
      }, error => {
        console.log(error)
      })
    }
  }
}
