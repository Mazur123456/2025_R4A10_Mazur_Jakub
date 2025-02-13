import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteurComponent } from './footeur.component';

describe('FooteurComponent', () => {
  let component: FooteurComponent;
  let fixture: ComponentFixture<FooteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
