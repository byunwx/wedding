import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PictureFrameComponent } from '../../components/picture-frame/picture-frame.component';

@Component({
  selector: 'app-our-story',
  imports: [MatCardModule, MatGridListModule, PictureFrameComponent],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.scss'
})
export class OurStoryComponentComponent {
  breakpoint!: number;
  pictureCol!: number;
  constructor() { }
}
