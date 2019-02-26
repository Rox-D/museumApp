import { TestBed } from '@angular/core/testing';

import { ArtworksListService } from './artworks-list.service';

describe('ArtworksListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtworksListService = TestBed.get(ArtworksListService);
    expect(service).toBeTruthy();
  });
});
