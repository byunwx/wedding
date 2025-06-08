import { Component } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {  GiftRegistryComponent } from "./pages/gift-registry/gift-registry.component";
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { OurStoryComponentComponent } from './pages/our-story/our-story.component';

@Component({
  selector: 'app-root',
  imports: [TopBarComponent, GiftRegistryComponent, HomeComponent, GalleryComponent, OurStoryComponentComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding';
}
