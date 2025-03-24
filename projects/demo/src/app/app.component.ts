import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DockPanelDemoComponent } from './dockPanel-demo/dockPanel-demo.component';
import { StackPanelDemoComponent } from './stackPanel-demo/stackPanel-demo.component';
import { UniformGridDemoComponent } from './uniformGrid-demo/uniformGrid-demo.component';
import { WrapPanelDemoComponent } from './wrapPanel-demo/wrapPanel-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';

@Component({
    selector: 'app-root',
    imports: [
        MatTabsModule,
        DockPanelDemoComponent,
        GridDemoComponent,
        StackPanelDemoComponent,
        UniformGridDemoComponent,
        WrapPanelDemoComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Demo';
}
