import { Component } from '@angular/core';
import { WrapPanelComponent } from '../../../../chapter-ang-controls/src/lib/wrap-panel/wrap-panel.component';

@Component({
    selector: 'app-wrap-panel-demo',
    imports: [
        WrapPanelComponent
    ],
    templateUrl: './wrap-panel-demo.component.html',
    styleUrl: './wrap-panel-demo.component.scss'
})
export class WrapPanelDemoComponent {}
