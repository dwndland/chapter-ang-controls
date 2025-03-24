import { Component } from '@angular/core';
import { ColumnDefinition, ColumnDefinitions, GridComponent, GridItemDirective, RowDefinition, RowDefinitions } from '@chapter-ang-controls';

@Component({
    selector: 'app-grid-demo',
    imports: [
      GridComponent,
      ColumnDefinitions,
      ColumnDefinition,
      RowDefinitions,
      RowDefinition,
      GridItemDirective
    ],
    templateUrl: './grid-demo.component.html',
    styleUrl: './grid-demo.component.scss'
})
export class GridDemoComponent {}
