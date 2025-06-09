import { Component, HostListener, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-gallery',
  imports: [ NgImageSliderModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent implements OnInit {
  public imageObject = [
    {
      image: '001.jpg',
      thumbImage: '001.jpg',
      alt: 'Album page 1',
      title: 'Album page 1'
    },
    {
      image: '002.jpg',
      thumbImage: '002.jpg',
      alt: 'Album page 2',
      title: 'Album page 2'
    },
    {
      image: '003.jpg',
      thumbImage: '003.jpg',
      alt: 'Album page 3',
      title: 'Album page 3'
    },
       {
      image: '004.jpg',
      thumbImage: '004.jpg',
      alt: 'Album page 4',
      title: 'Album page 4'
    },
    {
      image: '005.jpg',
      thumbImage: '005.jpg',
      alt: 'Album page 5',
      title: 'Album page 5'
    },
    {
      image: '006.jpg',
      thumbImage: '006.jpg',
      alt: 'Album page 6',
      title: 'Album page 6'
    },
    {
      image: '008.jpg',
      thumbImage: '008.jpg',
      alt: 'Album page 8',
      title: 'Album page 8'
    },
    {
      image: '009.jpg',
      thumbImage: '009.jpg',
      alt: 'Album page 9',
      title: 'Album page 9'
    },
    {
      image: '010.jpg',
      thumbImage: '010.jpg',
      alt: 'Album page 10',
      title: 'Album page 10'
    },
    {
      image: '011.jpg',
      thumbImage: '011.jpg',
      alt: 'Album page 11',
      title: 'Album page 11'
    },
    {
      image: '012.jpg',
      thumbImage: '012.jpg',
      alt: 'Album page 12',
      title: 'Album page 12'
    },
    {
      image: '013.jpg',
      thumbImage: '013.jpg',
      alt: 'Album page 13',
      title: 'Album page 13'
    },
    {
      image: '014.jpg',
      thumbImage: '014.jpg',
      alt: 'Album page 14',
      title: 'Album page 14'
    },
    {
      image: '015.jpg',
      thumbImage: '015.jpg',
      alt: 'Album page 15',
      title: 'Album page 15'
    },
    {
      image: '016.jpg',
      thumbImage: '016.jpg',
      alt: 'Album page 16',
      title: 'Album page 16'
    },
    {
      image: '017.jpg',
      thumbImage: '017.jpg',
      alt: 'Album page 17',
      title: 'Album page 17'
    },
    {
      image: '018.jpg',
      thumbImage: '018.jpg',
      alt: 'Album page 18',
      title: 'Album page 18'
    },
    {
      image: '019.jpg',
      thumbImage: '019.jpg',
      alt: 'Album page 19',
      title: 'Album page 19'
    }
  ];

  public firstImageOject = this.imageObject.slice(0, 9);
  public secondImageOject = this.imageObject.slice(9);

  public imageSize = {
    width: '100%',
    height: '80%',
  };

  windowWidth!: number;

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.updateImageHeight();
  }

  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateImageHeight();
  }

  updateImageHeight() {
    if (this.windowWidth < 1200) {
      this.imageSize = {
        width: '100%',
        height: '30%',
      };
    } else {
      this.imageSize = {
        width: '100%',
        height: '80%',
      };
    }
  }

  
}
