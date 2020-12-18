import { TestBed } from '@angular/core/testing';

import { PlaylistService } from './playlist.service';

describe('PlaylistService', () => {
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
