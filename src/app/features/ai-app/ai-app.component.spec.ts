import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAppComponent } from './ai-app.component';

describe('AiAppComponent', () => {
  let component: AiAppComponent;
  let fixture: ComponentFixture<AiAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
