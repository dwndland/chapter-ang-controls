import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit, Renderer2, Directive, Input } from '@angular/core';
import { ColumnDefinitions } from './columnDefinitions';
import { RowDefinitions } from './rowDefinitions';

@Component({
    selector: 'grid',
    template: '<ng-content></ng-content>',
    styles: [':host { display: grid; position: relative; width: 100%; height: 100%; }']
})
export class GridComponent implements AfterContentInit {
    @ContentChildren(ColumnDefinitions) columnDefinitions!: QueryList<ColumnDefinitions>;
    @ContentChildren(RowDefinitions) rowDefinitions!: QueryList<RowDefinitions>;

    constructor(private renderer: Renderer2, private element: ElementRef) {}

    ngAfterContentInit() {
        let columnStyles = '';
        let rowStyles = '';

        this.columnDefinitions.forEach((def) => {
            columnStyles = def.columns.map((col) => col.width).join(' ');
        });

        this.rowDefinitions.forEach((def) => {
            rowStyles = def.rows.map((row) => row.height).join(' ');
        });

        if (columnStyles) {
            this.renderer.setStyle(this.element.nativeElement, 'grid-template-columns', columnStyles);
        }
        if (rowStyles) {
            this.renderer.setStyle(this.element.nativeElement, 'grid-template-rows', rowStyles);
        }
    }
}
