import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAngControlsComponent } from './chapter-ang-controls.component';

describe('ChapterAngControlsComponent', () => {
    let component: ChapterAngControlsComponent;
    let fixture: ComponentFixture<ChapterAngControlsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChapterAngControlsComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ChapterAngControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
