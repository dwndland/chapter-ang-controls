import { Component, ContentChildren, QueryList } from '@angular/core';
import { RowDefinition } from './rowDefinition';

@Component({
    selector: 'rowDefinitions',
    template: '<ng-content></ng-content>'
})
export class RowDefinitions {
    @ContentChildren(RowDefinition) rows!: QueryList<RowDefinition>;
}
