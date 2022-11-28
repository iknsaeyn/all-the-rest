import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputAnArrayComponent } from './output-an-array.component';

describe('OutputAnArrayComponent', () => {
  let component: OutputAnArrayComponent;
  let fixture: ComponentFixture<OutputAnArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputAnArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputAnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
