import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryShowComponent } from './entry-show.component';

describe('EntryShowComponent', () => {
  let component: EntryShowComponent;
  let fixture: ComponentFixture<EntryShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
