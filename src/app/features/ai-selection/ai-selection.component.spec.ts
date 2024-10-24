import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSelectionComponent } from './ai-selection.component';

describe('AiSelectionComponent', () => {
  let component: AiSelectionComponent;
  let fixture: ComponentFixture<AiSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
