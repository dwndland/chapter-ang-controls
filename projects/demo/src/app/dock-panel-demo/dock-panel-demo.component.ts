import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DockPanelComponent } from '../../../../chapter-ang-controls/src/lib/dock-panel/dock-panel.component';

@Component({
    selector: 'app-dock-panel-demo',
    imports: [
      DockPanelComponent,
      MatButtonModule
    ],
    templateUrl: './dock-panel-demo.component.html',
    styleUrl: './dock-panel-demo.component.scss'
})
export class DockPanelDemoComponent {}
