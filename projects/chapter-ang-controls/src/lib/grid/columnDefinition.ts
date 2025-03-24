import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'columnDefinition'
})
export class ColumnDefinition {
    @Input() width: string = 'auto';
}
