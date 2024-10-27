import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menuItems = [
    { name: 'Item 1', icon: 'home' },
    { name: 'Item 2', icon: 'info' },
    // Add more items as needed
  ];

  selectedItem: any;
  sidenavOpened = false; // Control the state of the sidenav

  selectItem(item: any) {
    this.selectedItem = item;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
