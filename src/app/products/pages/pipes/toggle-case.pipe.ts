import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tooglecase'
})
export class ToogleCasePipe implements PipeTransform {

    transform(value: string , upper : boolean= false) : string {

        if(upper) return value.toUpperCase();

        return value;
    }

}