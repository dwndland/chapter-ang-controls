import { Component } from '@angular/core';
import { UniformGridComponent } from '../../../../chapter-ang-controls/src/lib/uniform-grid/uniform-grid.component';

@Component({
    selector: 'app-uniform-grid-demo',
    imports: [
      UniformGridComponent
    ],
    templateUrl: './uniform-grid-demo.component.html',
    styleUrl: './uniform-grid-demo.component.scss'
})
export class UniformGridDemoComponent {}
