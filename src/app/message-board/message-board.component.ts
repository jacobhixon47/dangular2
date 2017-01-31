import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css'],
  providers: [UserService]
})
export class MessageBoardComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

  checkAuth() {
    this.userService.checkAuth();
  }
}
