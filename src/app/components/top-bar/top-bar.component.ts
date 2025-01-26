import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-top-bar',
  imports: [
    CommonModule, 
    RouterModule,
    MatMenuModule,
    MatIcon
  ],
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth);
  }


    
}
