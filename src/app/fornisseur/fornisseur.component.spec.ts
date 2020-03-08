import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornisseurComponent } from './fornisseur.component';

describe('FornisseurComponent', () => {
  let component: FornisseurComponent;
  let fixture: ComponentFixture<FornisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
