import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPrestatairesComponent } from './mes-prestataires.component';

describe('MesPrestatairesComponent', () => {
  let component: MesPrestatairesComponent;
  let fixture: ComponentFixture<MesPrestatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesPrestatairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesPrestatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
