import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;


  constructor(private router: Router) { }

username!: string;
password!: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["admin"]);
    } else if(this.username == 'employee' && this.password == 'employee'){
      this.router.navigate(["employee"]);
    }else if(this.username == 'client' && this.password == 'client'){
      this.router.navigate(["client"]);
    }
    else {
      alert("Invalid credentials");
    }
  }
  }
