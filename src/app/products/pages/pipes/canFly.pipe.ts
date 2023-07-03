import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'canfly'
})

export class CanFly implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Puede Volar' : 'No puede volar'
    }
}

