import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[]=[];
  

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    console.log('UserListComponent - OnInit');
    this.loadUsers();
  }

  private loadUsers() {
    console.log('UserListComponent - loadsUsers');
    const url = 'https://test-sm.onrender.com/user';
    this.http.get<User[]>(url).subscribe(u=>this.users=u);
  }


}
