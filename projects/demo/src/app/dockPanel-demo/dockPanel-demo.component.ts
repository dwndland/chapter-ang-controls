import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DockPanelComponent } from '@chapter-ang-controls';

@Component({
    selector: 'app-dockPanel-demo',
    imports: [
      DockPanelComponent,
      MatButtonModule
    ],
    templateUrl: './dockPanel-demo.component.html',
    styleUrl: './dockPanel-demo.component.scss'
})
export class DockPanelDemoComponent {}
