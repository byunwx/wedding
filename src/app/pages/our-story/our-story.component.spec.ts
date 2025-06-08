import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoryComponentComponent } from './our-story.component';

describe('HomeComponent', () => {
  let component: OurStoryComponentComponent;
  let fixture: ComponentFixture<OurStoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStoryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
