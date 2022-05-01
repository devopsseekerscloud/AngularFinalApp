import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../service/customer.service";

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl(null, [Validators.required])
  });

  constructor(private _customerService: CustomerService) {
  }

  selectedCustomer: any = null;

  ngOnInit(): void {
  }

  searchData() {
    this._customerService.searchCustomer(this.customerForm.get('id')?.value).subscribe(response => {
      this.selectedCustomer = response.data;
    }, error => {
      console.log(error)
    })
  }
}
