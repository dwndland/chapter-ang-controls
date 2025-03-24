import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'rowDefinition'
})
export class RowDefinition {
    @Input() height: string = 'auto';
}
