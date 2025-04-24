import { Component } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from './pages/home/home.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@Component({
  selector: 'app-root',
  imports: [TopBarComponent, ContactComponent, HomeComponent, RsvpComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding';
}
