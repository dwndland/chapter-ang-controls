import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DockPanelDemoComponent } from './dock-panel-demo/dock-panel-demo.component';
import { StackPanelDemoComponent } from './stack-panel-demo/stack-panel-demo.component';

@Component({
    selector: 'app-root',
    imports: [
        MatTabsModule,
        DockPanelDemoComponent,
        StackPanelDemoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Demo';
}
