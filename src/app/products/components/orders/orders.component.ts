import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(private service:ProductsService) { }
  success:boolean = false
  loading:boolean = false;
  orders:any[] = [];
  getmyorder() {
    this.loading = true
    this.service.gteMyOrder(localStorage.getItem("userId")).subscribe((res:any) => {
      this.orders = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     })
    }
  ngOnInit(): void {
    this.getmyorder()
  }
}
