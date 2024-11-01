import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytelComponent } from './mytel.component';

describe('MytelComponent', () => {
  let component: MytelComponent;
  let fixture: ComponentFixture<MytelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
