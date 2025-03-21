import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { DockPanelComponent } from "../../../chapter-ang-controls/src/lib/dock-panel/dock-panel.component";

@Component({
    selector: 'app-root',
    imports: [
    MatTabsModule,
    DockPanelComponent,
    MatButtonModule
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Demo';
}
