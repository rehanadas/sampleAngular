import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddetailComponent } from './griddetail.component';

describe('GriddetailComponent', () => {
  let component: GriddetailComponent;
  let fixture: ComponentFixture<GriddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriddetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
