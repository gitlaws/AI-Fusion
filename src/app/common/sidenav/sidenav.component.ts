import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  isSidenavOpen: any;

  toggleNav() {
    this.sidenavToggle.emit();
  }
}
