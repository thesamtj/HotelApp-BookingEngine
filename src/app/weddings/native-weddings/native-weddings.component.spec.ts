import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeWeddingsComponent } from './native-weddings.component';

describe('NativeWeddingsComponent', () => {
  let component: NativeWeddingsComponent;
  let fixture: ComponentFixture<NativeWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
