import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../service/customer.service";
import {CustomerDTO} from "../../../../dto/CustomerDTO";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  saveForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required])
  });

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  saveData() {
    const dto = new CustomerDTO(
      this.saveForm.get('id')?.value,
      this.saveForm.get('name')?.value,
      this.saveForm.get('address')?.value,
      this.saveForm.get('salary')?.value,
    );
    this._customerService.saveCustomer(dto).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
