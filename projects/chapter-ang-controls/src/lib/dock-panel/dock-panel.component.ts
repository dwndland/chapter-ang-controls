import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit, Renderer2, Input } from '@angular/core';
import { Dock } from './dock';

/**
 * DockPanelComponent
 *
 * A container component that arranges its child elements based on their `dock` attribute.
 * Supports docking to the top, bottom, left, right, or filling the remaining space.
 */
@Component({
    selector: 'dock-panel',
    template: `<div class="dock-container"><ng-content></ng-content></div>`,
    styleUrls: ['./dock-panel.component.scss']
})
export class DockPanelComponent implements AfterContentInit {
    /**
     * Queries all direct child elements with the `dockItem` reference.
     * These elements are arranged based on their `dock` attribute.
     */
    @ContentChildren('dockItem', { descendants: false }) items!: QueryList<ElementRef>;

    /**
     * Determines whether the last child element should fill the remaining space.
     * Defaults to `true`.
     */
    @Input() LastChildFill: boolean = true;

    constructor(private renderer: Renderer2) {}

    /**
     * Lifecycle hook that runs after the content is initialized.
     * Arranges child elements based on their `dock` attribute.
     */
    public ngAfterContentInit(): void {
        let container = this.items.first?.nativeElement.parentElement;
        if (!container) return;

        this.renderer.setStyle(container, 'position', 'relative');
        this.renderer.setStyle(container, 'width', '100%');
        this.renderer.setStyle(container, 'height', '100%');

        this.arrangeItems();
    }

    private arrangeItems(): void {
        let topOffset = 0;
        let bottomOffset = 0;
        let leftOffset = 0;
        let rightOffset = 0;
        let lastItem: any = null;
        let lastLeftOffset = 0;

        this.items.forEach((item) => {
            const dock = item.nativeElement.getAttribute('dock') as Dock;
            this.renderer.setStyle(item.nativeElement, 'position', 'absolute');

            lastItem = item.nativeElement;

            switch (dock) {
                case Dock.Top:
                    this.renderer.setStyle(item.nativeElement, 'top', `${topOffset}px`);
                    this.renderer.setStyle(item.nativeElement, 'left', '0');
                    this.renderer.setStyle(item.nativeElement, 'right', '0');
                    topOffset += item.nativeElement.offsetHeight;
                    break;

                case Dock.Bottom:
                    bottomOffset += item.nativeElement.offsetHeight;
                    this.renderer.setStyle(item.nativeElement, 'bottom', `${bottomOffset - item.nativeElement.offsetHeight}px`);
                    this.renderer.setStyle(item.nativeElement, 'left', '0');
                    this.renderer.setStyle(item.nativeElement, 'right', '0');
                    break;

                case Dock.Left:
                default:
                    this.renderer.setStyle(item.nativeElement, 'top', `${topOffset}px`);
                    this.renderer.setStyle(item.nativeElement, 'bottom', `${bottomOffset}px`);
                    this.renderer.setStyle(item.nativeElement, 'left', `${leftOffset}px`);
                    lastLeftOffset = leftOffset;
                    leftOffset += item.nativeElement.offsetWidth;
                    break;

                case Dock.Right:
                    rightOffset += item.nativeElement.offsetWidth;
                    this.renderer.setStyle(item.nativeElement, 'top', `${topOffset}px`);
                    this.renderer.setStyle(item.nativeElement, 'bottom', `${bottomOffset}px`);
                    this.renderer.setStyle(item.nativeElement, 'right', `${rightOffset - item.nativeElement.offsetWidth}px`);
                    break;
            }
        });

        if (this.LastChildFill && lastItem) {
            this.renderer.setStyle(lastItem, 'top', `${topOffset}px`);
            this.renderer.setStyle(lastItem, 'bottom', `${bottomOffset}px`);
            this.renderer.setStyle(lastItem, 'left', `${lastLeftOffset}px`);
            this.renderer.setStyle(lastItem, 'right', `${rightOffset}px`);
        }
    }
}
