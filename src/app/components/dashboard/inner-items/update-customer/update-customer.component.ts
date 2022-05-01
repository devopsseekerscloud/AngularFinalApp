import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../service/customer.service";
import {CustomerDTO} from "../../../../dto/CustomerDTO";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required])
  });
  selectedCustomer: any = null;

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  saveData() {
    const dto = new CustomerDTO(
      this.customerForm.get('id')?.value,
      this.customerForm.get('name')?.value,
      this.customerForm.get('address')?.value,
      this.customerForm.get('salary')?.value,
    );
    this._customerService.saveCustomer(dto).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  search() {
    this._customerService.searchCustomer(this.customerForm.get('id')?.value).subscribe(response => {
      this.selectedCustomer = response.data;
      this.customerForm.patchValue({
        name: this.selectedCustomer.name,
        address: this.selectedCustomer.address,
        salary: this.selectedCustomer.salary
      })
    }, error => {
      console.log(error)
    })
  }
}
