import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent as SongItemComponent } from './item.component';

describe('SongItemComponent', () => {
  let component: SongItemComponent;
  let fixture: ComponentFixture<SongItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

});
