import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftRegistryComponent } from './gift-registry.component';

describe('ContactComponent', () => {
  let component: GiftRegistryComponent;
  let fixture: ComponentFixture<GiftRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftRegistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
