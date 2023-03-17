import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private service:CartsService) { }
  cartProducts:any[] = [];
  total:number = 0;
  success:boolean = false
  address:string="";
  ngOnInit(): void {
    this.getCartProducts()
  }


  getCartProducts() {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
  }

  addAmount(index:number) {
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  minsAmount(index:number) {
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  detectChange() {
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  deleteProduct(index:number) {
    this.cartProducts.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  clearCart() {
    this.cartProducts = []
    this.address=""
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  getCartTotal() {
    this.total = 0
    for(let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.CommdityCost * this.cartProducts[x].quantity;
    }
  }

  addCart() {
    let Model = {
      OrderCreateDate:new Date(),
      OrderAddress:this.address,
      OrderUserId:localStorage.getItem("userId"),
      OrderStatusId:1,
      //OrderEmpIdId:NaN
    }

    this.service.createNewCart(Model).subscribe((res:any) => {
      this.success = true
      localStorage.setItem("orderId",res.Id)
      let products = this.cartProducts.map(item => {
        return {OrderDetailsCommdityId:item.item.Id , OrderDetailsCount:item.quantity,OrderDetailsOrederId:localStorage.getItem("orderId")}
       })
       
      this.service.createNewCartDetails(products).subscribe(res => {
        this.success = true
        this.clearCart()
      })
      //alert(localStorage.getItem("orderId"))
    })
    

    console.log(Model)
  }

 
}
