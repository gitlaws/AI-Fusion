import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInterfaceComponent } from './ai-interface.component';

describe('AiInterfaceComponent', () => {
  let component: AiInterfaceComponent;
  let fixture: ComponentFixture<AiInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
