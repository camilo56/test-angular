import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css']
})
export class UserTestComponent implements OnInit {
  email = '';
  @Input() user = 'Camilo56';
  @Output() throwEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showEmail(email: string) {
    this.email = email;
  }

  throw(name: string) {
    this.throwEvent.emit(name);
  }
}
