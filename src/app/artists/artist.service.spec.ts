import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  let service: ArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
