import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DockPanelDemoComponent } from './dock-panel-demo/dock-panel-demo.component';
import { StackPanelDemoComponent } from './stack-panel-demo/stack-panel-demo.component';
import { UniformGridDemoComponent } from './uniform-grid-demo/uniform-grid-demo.component';
import { WrapPanelDemoComponent } from './wrap-panel-demo/wrap-panel-demo.component';

@Component({
    selector: 'app-root',
    imports: [
        MatTabsModule,
        DockPanelDemoComponent,
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
