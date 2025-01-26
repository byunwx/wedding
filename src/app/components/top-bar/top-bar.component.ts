import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-top-bar',
  imports: [
    CommonModule, 
    RouterModule,
    MatMenuModule,
  ],
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  windowWidth!: number;
  links = [
    {
      name: 'Home',
      url: ''
    },
    {
      name: 'RSVP',
      url: 'rsvp'
    },
    {
      name: 'Gallery',
      url: 'gallery'
    },
    {
      name: 'Contact',
      url: 'contact'
    }
  ]    
}
