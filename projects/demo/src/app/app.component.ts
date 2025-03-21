import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-root',
    imports: [
        MatTabsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Demo';
}
