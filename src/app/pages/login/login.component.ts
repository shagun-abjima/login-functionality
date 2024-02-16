import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginUsers:string[]=[]
  
  constructor(private http:HttpClient){}
  
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  login(){
    //console.log(this.loginForm.value)
    this.http.post('https://fakestoreapi.com/auth/login',this.loginForm.value).subscribe((res:any)=>{
      if(res){
        alert('login successfull');
       
        //this.router.navigatebyurl('/dashboard')
        localStorage.setItem('key', res.token)
      }
      else{
        alert('login failed');
      }
    })}}
    //this.loginUsers.push(this.loginObj);
    //localStorage.setItem('loginUsers',JSON.stringify(this.loginForm.value ))
    //this. loginObj={
      //userName:'',
      //password:''
  
    //}

   

