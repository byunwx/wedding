import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PictureFrameComponent } from '../../components/picture-frame/picture-frame.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rsvp',
  imports: [
    ReactiveFormsModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    PictureFrameComponent,
    MatButtonModule
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  constructor() { }
  rsvpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    attending: new FormControl(''),
    guestCount: new FormControl(0, [Validators.required, Validators.pattern(/^\d*[1-9]\d*$/)]),
    message: new FormControl('')
  });

  submitRsvp() {
    console.log(this.rsvpForm.value);
  }
}
