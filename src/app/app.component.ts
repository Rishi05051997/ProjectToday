import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from "./models/Users";
import { SharedService } from "./service/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  // datasaved = false;
  // allbooks : Observable<Users[]>;
  userName:any;
  users: Users[] = [];
  name: any;
  p: number = 1;
  constructor(private rs: SharedService, private router:Router ) { }

  ngOnInit() {
    this.rs.getUsers().subscribe
      (
        (res) => {
          this.users = res;
          console.log(res);
        }
        
      );
    
  }
  Search(){
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  deleteRow(val) {
    if (confirm("Are you sure to delete?")) {
      this.rs.deleteUser(val).subscribe(data => {
      });
      this.rs.getUsers().subscribe((res) => {
        this.users = res;
      });
    }
   
  }
  update(id) {
    this.router.navigate(['/update', id]);
  }
  
}
