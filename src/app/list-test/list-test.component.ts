import { Component, OnInit } from '@angular/core';
import { JokerService } from '../joker.service';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  users: any[];
  selectedUser: string;

  constructor(private jokerService: JokerService) {
  }

  ngOnInit() {
    this.jokerService.getUsers().subscribe(data => {
      this.users = data;
      this.selectedUser = this.users[0].name;
    });
  }

  selected(user: string) {
    this.selectedUser = user;
  }

  getUser(user: number) {
    this.jokerService.getUser(1).subscribe(data => {
      this.selectedUser = data.name;
    });
  }
}
