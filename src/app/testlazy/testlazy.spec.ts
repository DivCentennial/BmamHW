import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testlazy } from './testlazy';

describe('Testlazy', () => {
  let component: Testlazy;
  let fixture: ComponentFixture<Testlazy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testlazy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testlazy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
