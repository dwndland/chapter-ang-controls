import { Component } from '@angular/core';
import { StackPanelComponent } from '../../../../chapter-ang-controls/src/lib/stack-panel/stack-panel.component';

@Component({
    selector: 'app-stack-panel-demo',
    imports: [
      StackPanelComponent
    ],
    templateUrl: './stack-panel-demo.component.html',
    styleUrl: './stack-panel-demo.component.scss'
})
export class StackPanelDemoComponent {}
