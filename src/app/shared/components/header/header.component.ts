import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loading:any = localStorage.getItem("userId");
  catId:any=localStorage.getItem("catId");
  storeId:any=localStorage.getItem("storeId");
  constructor(private router:Router) { 
    
  }
  logout() {
    localStorage.removeItem("userId")
  }
  ngOnInit(): void 
  {
    
    
  }
  ca(){
    this.catId=localStorage.getItem("catId");
    this.router.navigate(['/stores/'+this.catId]) 
  }
  st(){
    this.storeId=localStorage.getItem("storeId");
    this.router.navigate(['/products/'+this.storeId]) 
  }
  nnav(){
    if(localStorage.getItem("userId"))
    {
      this.loading=true;
    }
    else{
      this.loading=false;
    }
}
}
