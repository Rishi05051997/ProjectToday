import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../models/Users';
import { SharedService } from "./../service/shared.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  constructor(public route:ActivatedRoute, public router: Router,public  rs:SharedService) { }
  val: any;
  Users: Users[] = [];
  user: Users;
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id :"+this.val);
    this.rs.getUpdateUser(this.val).subscribe(data => {
      this.user = data;
    })
  }
  update() {
    this.rs.updateUser(this.user).subscribe(data => {
      
    });
    this.getUsers();
    this.router.navigate(['/']);
  }
  getUsers() {
    this.rs.getUsers().subscribe((res) => {
      this.Users = res;
    })
  }
  }


