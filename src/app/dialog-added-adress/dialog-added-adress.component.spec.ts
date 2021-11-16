import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddedAdressComponent } from './dialog-added-adress.component';

describe('DialogAddedAdressComponent', () => {
  let component: DialogAddedAdressComponent;
  let fixture: ComponentFixture<DialogAddedAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddedAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddedAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
