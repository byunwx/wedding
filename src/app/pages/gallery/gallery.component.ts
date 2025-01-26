import { Component } from '@angular/core';
import { PictureFrameComponent } from '../../components/picture-frame/picture-frame.component';

@Component({
  selector: 'app-gallery',
  imports: [PictureFrameComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  public pictures = [
    {
      id: 1,
      src: '001.jpg',
    },
    {
      id: 2,
      src: '002.jpg',
    },
    {
      id: 3,
      src: '003.jpg',
    },
    {
      id: 4,
      src: '004.jpg',
    },
    {
      id: 5,
      src: '005.jpg',
    },
    {
      id: 6,
      src: '006.jpg',
    },
    {
      id: 8,
      src: '008.jpg',
    },
    {
      id: 9,
      src: '009.jpg',
    },
    {
      id: 10,
      src: '010.jpg',
    },
    {
      id: 11,
      src: '011.jpg',
    },
    {
      id: 12,
      src: '012.jpg',
    },
    {
      id: 13,
      src: '013.jpg',
    },
    {
      id: 14,
      src: '014.jpg',
    },
    {
      id: 15,
      src: '015.jpg',
    },
    {
      id: 16,
      src: '016.jpg',
    },
    {
      id: 17,
      src: '017.jpg',
    },
    {
      id: 18,
      src: '018.jpg',
    },
    {
      id: 19,
      src: '019.jpg',
    },
  ]
}
