import { Component } from '@angular/core';
import { category, store } from '../../models/category';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import {  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
  
export class StoreComponent implements OnInit{
  stores:store[] = [];
  id:any;
  loading:boolean = false;
  //@Input() data!:category
  //@Output() item = new EventEmitter();
  constructor(private route:ActivatedRoute ,private service:ProductsService,private router:Router) { 
    this.id = this.route.snapshot.paramMap.get("id")
    
  }
  gteStoresCat() {
    this.loading = true
    this.service.gteStoresByCat(this.id).subscribe((res:any) => {
      this.stores = res
      console.log(res)
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     })
  }
  asd(a:any){
    localStorage.setItem("storeId",a)
    this.router.navigate(['/products/'+a])

  }
  ngOnInit(): void {
    this.gteStoresCat()
  }
}
