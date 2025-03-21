import { TestBed } from '@angular/core/testing';

import { ChapterAngControlsService } from './chapter-ang-controls.service';

describe('ChapterAngControlsService', () => {
  let service: ChapterAngControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterAngControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
