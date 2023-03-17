import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  id:any;
  cartProducts:any[] = []
  constructor(private route:ActivatedRoute ,private service:ProductsService) { 
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    //this.getProducts()
    this.getProductsCategory(this.id)
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     }   )
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     })
  }
 
  filterCategory(event:any) {
    let value = event.target.value;
   (value == "all") ? this.getProducts() : this.getProductsCategory(value)
   
  }
  getProductsCategory(id:any) {
    this.loading = true
    this.service.getProductsByCategory(id).subscribe((res:any) => {
      this.loading = false
      this.products = res
    })
  }

  addToCart(event:any) {
    //console.log(event)
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.Id == event.item.Id)
      if(exist) {
        alert("Product is already in your cart "+ event.ccost)
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }
  
}
