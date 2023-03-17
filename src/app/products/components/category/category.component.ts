import { Component } from '@angular/core';
import { category } from '../../models/category';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories:category[] = [];
  loading:boolean = false;
  constructor(private service:ProductsService,private router:Router) { }
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
  myCat(a:any){
    localStorage.setItem("catId",a)
    this.router.navigate(['/stores/'+a]) 
  }
  ngOnInit(): void {
    this.getCategories()
  }


  
 
}

  