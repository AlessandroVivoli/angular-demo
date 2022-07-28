import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  isLoggedIn: boolean = false;

  @Output()
  onLogout = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  logout() {
    this.onLogout.emit();
  }
}
