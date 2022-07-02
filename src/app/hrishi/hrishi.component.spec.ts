import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrishiComponent } from './hrishi.component';

describe('HrishiComponent', () => {
  let component: HrishiComponent;
  let fixture: ComponentFixture<HrishiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrishiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
