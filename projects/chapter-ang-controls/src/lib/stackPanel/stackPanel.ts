import { Component, Input, HostBinding } from '@angular/core';
import { Orientation } from '../orientation';

/**
 * StackPanelComponent
 *
 * A container component that arranges its child elements in a stack.
 * Supports horizontal and vertical layout directions.
 */
@Component({
    selector: 'stackPanel',
    template: '<ng-content></ng-content>',
    styles: [':host {  display: flex;  }']
})
export class StackPanelComponent {
    /**
     * Orientation property to specify the layout direction.
     * Can be 'Horizontal' or 'Vertical'.
     */
    @Input() orientation: 'Horizontal' | 'Vertical' = 'Vertical';

    /**
     * Dynamically bind the CSS `flex-direction` property based on the orientation.
     */
    @HostBinding('style.flex-direction')
    public get flexDirection(): string {
        return (this.orientation as Orientation) === Orientation.Horizontal ? 'row' : 'column';
    }
}
