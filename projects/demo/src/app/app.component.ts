import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { DockPanelDemoComponent } from './dock-panel-demo/dock-panel-demo.component';

@Component({
    selector: 'app-root',
    imports: [
        MatTabsModule,
        DockPanelDemoComponent,
        MatButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Demo';
}
