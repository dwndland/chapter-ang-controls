import { AfterContentInit, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList } from '@angular/core';

/**
 * UniformGridComponent
 *
 * A container component that arranges its child elements in a uniform grid.
 */
@Component({
    selector: 'uniform-grid',
    template: '<ng-content></ng-content>',
    styles: [':host { display: grid; width: 100%; height: 100%; }']
})
export class UniformGridComponent implements AfterContentInit {
    /**
     * Queries all direct child elements with the `gridItem` reference.
     */
    @ContentChildren('gridItem', { descendants: false }) items!: QueryList<ElementRef>;

    /**
     * The number of rows and columns in the grid.
     */
    @Input() rows: number | null = null;

    /**
     * The number of columns in the grid.
     */
    @Input() columns: number | null = null;

    /**
     * Dynamically bind the CSS `grid-template-columns` property.
     */
    @HostBinding('style.gridTemplateColumns') gridTemplateColumns!: string;

    /**
     * Dynamically bind the CSS `grid-template-rows` property.
     */
    @HostBinding('style.gridTemplateRows') gridTemplateRows!: string;

    /**
     * Lifecycle hook that runs after the content is initialized.
     * Arranges child elements in a uniform grid.
     */
    public ngAfterContentInit(): void {
        this.items.changes.subscribe(() => {
            this.updateLayout();
        });

        this.updateLayout();
    }

    private updateLayout(): void {
        const sortedItems = this.items.toArray().sort((a, b) => {
            return a.nativeElement.compareDocumentPosition(b.nativeElement) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });

        const itemCount = sortedItems.length;

        let rows = this.rows;
        let columns = this.columns;

        if (!rows && !columns) {
            columns = Math.ceil(Math.sqrt(itemCount));
            rows = Math.ceil(itemCount / columns);
        } else if (!rows) {
            rows = Math.ceil(itemCount / columns!);
        } else if (!columns) {
            columns = Math.ceil(itemCount / rows!);
        }

        this.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        this.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }
}
