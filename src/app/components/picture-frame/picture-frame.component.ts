import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  imports: [],
  templateUrl: './picture-frame.component.html',
  styleUrl: './picture-frame.component.scss'
})
export class PictureFrameComponent {
 @Input() picture!: string;
 @Input() imgHeight: number = 300;
}
