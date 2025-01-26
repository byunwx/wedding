import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PictureFrameComponent } from '../../components/picture-frame/picture-frame.component';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatGridListModule, PictureFrameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  breakpoint!: number;
  pictureCol!: number;
  constructor() { }
}
