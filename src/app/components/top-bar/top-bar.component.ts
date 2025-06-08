import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
export class TopBarComponent implements OnInit {
  windowWidth!: number;
  links = [
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'Our Story',
      url: 'our-story'
    },
    {
      name: 'Gallery',
      url: 'gallery'
    },
    {
      name: 'Gift Registry',
      url: 'gift-registry'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }


}
