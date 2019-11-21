import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemanfaatanComponent } from './pemanfaatan.component';

describe('PemanfaatanComponent', () => {
  let component: PemanfaatanComponent;
  let fixture: ComponentFixture<PemanfaatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemanfaatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemanfaatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
