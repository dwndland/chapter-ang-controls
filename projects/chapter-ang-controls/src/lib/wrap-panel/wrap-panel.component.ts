import { Component, Input, HostBinding } from '@angular/core';
import { Orientation } from '../orientation';

@Component({
    selector: 'wrap-panel',
    template: '<ng-content></ng-content>',
    styles: [':host { display: flex; flex-wrap: wrap; width: 100%; height: 100%; }']
})
export class WrapPanelComponent {
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
