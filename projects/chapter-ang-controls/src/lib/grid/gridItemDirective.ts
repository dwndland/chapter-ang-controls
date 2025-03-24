import { Directive, Input, Renderer2, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[gridColumn], [gridRow], [gridColumnSpan], [gridRowSpan]'
})
export class GridItemDirective implements OnChanges {
    @Input() gridColumn!: number;
    @Input() gridRow!: number;
    @Input() gridColumnSpan!: number;
    @Input() gridRowSpan!: number;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['gridColumn']) {
            this.renderer.setStyle(this.el.nativeElement, 'grid-column', String(this.gridColumn + 1));
        }
        if (changes['gridRow']) {
            this.renderer.setStyle(this.el.nativeElement, 'grid-row', String(this.gridRow + 1));
        }
        if (changes['gridColumnSpan']) {
            const columnEnd = this.gridColumn + this.gridColumnSpan + 1;
            this.renderer.setStyle(this.el.nativeElement, 'grid-column-end', String(columnEnd));
        }
        if (changes['gridRowSpan']) {
            const rowEnd = this.gridRow + this.gridRowSpan + 1;
            this.renderer.setStyle(this.el.nativeElement, 'grid-row-end', String(rowEnd));
        }
    }
}
