import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  sideNavigationToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggleOpenSidenav() {
    this.sideNavigationToggle.emit();
  }
}
