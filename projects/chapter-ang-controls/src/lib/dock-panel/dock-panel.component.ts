import { Component } from '@angular/core';

@Component({
    selector: 'lib-dock-panel',
    imports: [],
    template: `<div><ng-content></ng-content></div>`,
    styleUrl: './dock-panel.component.scss'
})
export class DockPanelComponent {}
