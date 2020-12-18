import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _http: CustomersService) { }

  ngOnInit(): void {
  }

  FormSubmit(value){
    console.log(value);
    this._http.submitCustomer(value.value)
    .subscribe(data=>console.log(data),
    error=>console.log(error));
    value.reset();
  }
 
}
