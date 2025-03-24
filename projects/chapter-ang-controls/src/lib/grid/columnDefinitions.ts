import { Component, ContentChildren, QueryList } from '@angular/core';
import { ColumnDefinition } from './columnDefinition';

@Component({
    selector: 'columnDefinitions',
    template: '<ng-content></ng-content>'
})
export class ColumnDefinitions {
    @ContentChildren(ColumnDefinition) columns!: QueryList<ColumnDefinition>;
}
