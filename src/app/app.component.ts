import { Component, OnInit } from '@angular/core';
import { CustomersService } from './services/customers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  customer=[];
  updateData=[];
  error=false;
  msg;
  disablebtn=false;
 constructor(private _customerService :CustomersService){}
    ngOnInit(){
      setInterval(()=>{
        this._customerService.getCustomer()
          .subscribe(data=>{
            this.customer=data;
          },(error)=>{this.error=true; this.msg=error});
      },3000)
    }

 delete(args){
   this.disablebtn=true;
   this._customerService.deleteCustomer(args)
   .subscribe(data=>{
    this.updateData=data;
   },(error)=>console.log(error));
   this.disablebtn=false;
 }
}
