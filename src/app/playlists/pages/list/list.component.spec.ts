import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockPlaylistService;

  beforeEach(async () => {
    mockPlaylistService = jasmine.createSpyObj(['create(playlist)']);

    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [  RouterModule.forRoot([]),
                  BrowserAnimationsModule,
                  HttpClientModule
                ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new playlist', () => {
    component.newListValue = 'Playlist 1';
    var spy = spyOn(component, "createNew");
    component.createNew();
    expect(spy).toHaveBeenCalled();
  });
});
