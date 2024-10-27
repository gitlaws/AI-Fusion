import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  closeNav() {
    // Logic to close the side navigation
    console.log('Side navigation closed');
  }

  openNav() {
    // Logic to open the side navigation
    console.log('Side navigation opened');
  }
}
