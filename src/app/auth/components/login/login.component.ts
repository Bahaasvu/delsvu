import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { defaultIfEmpty } from 'rxjs';
import { Login, LoginResponse } from '../../context/DTOs';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder , 
    private service:LoginService , 
    private router:Router,
    private toaster:ToastrService
    ) { }

  loginForm!:FormGroup;
  ngOnInit(): void {
    this.createForm()
  }


  createForm() {
    this.loginForm = this.fb.group({
      UserName:['' , [Validators.required , Validators.email]],
      Password:['' , [Validators.required]],
      grant_type:['password']
    })
  }
 

  login(): void {
    //console.log(this.loginForm.value )
    this.service.login(this.loginForm.value).subscribe((res:any) =>{ 
      localStorage.setItem("userId" , res.Id)
      this.router.navigate(['/categories'])     
      //console.log(localStorage.getItem("token"))
      this.toaster.success("Login Success" , "Success")
    })
  }
}
