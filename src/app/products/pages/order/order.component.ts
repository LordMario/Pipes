import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

 
  public heroes : Hero [] = [
    {
      name    : 'Batman',
      canFly  : false,
      color   : Color.Negro
    },
    {
      name    : 'Hulk',
      canFly  : false,
      color   : Color.Verde
    },
    {
      name    : 'Iroman',
      canFly  : true,
      color   : Color.Rojo
    },
    {
      name    : 'Flash',
      canFly  : false,
      color   : Color.Rojo
    },
    {
      name    : 'Linterna Verd',
      canFly  : true,
      color   : Color.Verde
    }
  ]
  public upper : boolean = false;
  public sort? : keyof Hero ;
  changeSort(value : keyof Hero) : void{
    this.sort= value;
  }

  changeUpper() :void{
    this.upper= !this.upper;
  }

}
