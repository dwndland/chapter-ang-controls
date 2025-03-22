import { Component, ContentChildren, QueryList, AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
import { Dock } from './dock';

/**
 * DockPanelComponent
 *
 * A container component that arranges its child elements based on their `dock` attribute.
 * Supports docking to the top, bottom, left, right, or filling the remaining space.
 */
@Component({
    selector: 'dock-panel',
    template: '<ng-content></ng-content>',
    styles: [':host { display: grid; width: 100%; height: 100%; }']
})
export class DockPanelComponent implements AfterContentInit {
    /**
     * Queries all direct child elements with the `dockItem` reference.
     * These elements are arranged based on their `dock` attribute.
     */
    @ContentChildren('dockItem', { descendants: false }) items!: QueryList<ElementRef>;

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    /**
     * Lifecycle hook that runs after the content is initialized.
     * Arranges child elements based on their `dock` attribute.
     */
    public ngAfterContentInit(): void {
        const { columns, rows } = this.countColumnsAndRows();

        let currentLeftColumn = 1;
        let currentTopRow = 1;
        let currentRightColumn = columns.length;
        let currentBottomRow = rows.length;

        // Arrange children based on their dock attribute
        this.items.forEach((item) => {
            const dock = item.nativeElement.getAttribute('dock') as Dock;

            // +1 for all the end columns and rows because its exclusive.
            switch (dock) {
                case Dock.Top:
                    this.renderer.setStyle(item.nativeElement, 'grid-column', `${currentLeftColumn} / ${currentRightColumn + 1}`);
                    this.renderer.setStyle(item.nativeElement, 'grid-row', `${currentTopRow}`);
                    ++currentTopRow;
                    break;

                case Dock.Bottom:
                    this.renderer.setStyle(item.nativeElement, 'grid-column', `${currentLeftColumn} / ${currentRightColumn + 1}`);
                    this.renderer.setStyle(item.nativeElement, 'grid-row', `${currentBottomRow}`);
                    --currentBottomRow;
                    break;

                case Dock.Left:
                    this.renderer.setStyle(item.nativeElement, 'grid-column', `${currentLeftColumn}`);
                    this.renderer.setStyle(item.nativeElement, 'grid-row', `${currentTopRow} / ${currentBottomRow + 1}`);
                    ++currentLeftColumn;
                    break;

                case Dock.Right:
                    this.renderer.setStyle(item.nativeElement, 'grid-column', `${currentRightColumn}`);
                    this.renderer.setStyle(item.nativeElement, 'grid-row', `${currentTopRow} / ${currentBottomRow + 1}`);
                    --currentRightColumn;
                    break;

                default:
                    this.renderer.setStyle(item.nativeElement, 'grid-column', `${currentLeftColumn} / ${currentRightColumn}`);
                    this.renderer.setStyle(item.nativeElement, 'grid-row', `${currentTopRow} / ${currentBottomRow}`);
                    break;
            }
        });

        this.renderer.setStyle(this.el.nativeElement, 'grid-template-columns', columns.join(' '));
        this.renderer.setStyle(this.el.nativeElement, 'grid-template-rows', rows.join(' '));
    }

    private countColumnsAndRows(): { columns: string[]; rows: string[] } {
        let topRows: string[] = [];
        let bottomRows: string[] = [];
        let leftCols: string[] = [];
        let rightCols: string[] = [];
        let hasFill = false;

        // First pass: Determine the grid structure
        this.items.forEach((item) => {
            const dock = item.nativeElement.getAttribute('dock') as Dock;
            switch (dock) {
                case 'top':
                    topRows.push('auto');
                    break;
                case 'bottom':
                    bottomRows.unshift('auto');
                    break;
                case 'left':
                    leftCols.push('auto');
                    break;
                case 'right':
                    rightCols.unshift('auto');
                    break;
                default:
                    hasFill = true;
                    break;
            }
        });

        // Add a fill area if necessary
        if (hasFill) {
            topRows.push('1fr');
            leftCols.push('1fr');
        }

        return {
            columns: [...leftCols, ...rightCols],
            rows: [...topRows, ...bottomRows]
        };
    }
}
