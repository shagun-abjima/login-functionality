import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  user={
    "username":"",
    "password":""
  }
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.http.get('https://fakestoreapi.com/users').subscribe((res:any)=>{
      this.user=res.data
    })
  }
}
