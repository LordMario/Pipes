import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {

  //i18nSelect 
  public name :string ='Fernando';
  public gender : 'male' | 'female' = 'male';

  public invitationMap ={
    'male' : 'Invitarlo',
    'female' : 'Invitarla'
  };

  changeClient() : void{
    this.name='melissa';
    this.gender='female';
  }


  //i18Plural

  public clients  : string[] = ['Mario','Maria','Fernanda', 'Soza', 'Alejandra','Michell', 'Sofia']
  deleteClient():void{
    this.clients.shift();
  }

  public clientsMap = {
    '=0' :'No tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //Key Value

  public person = {
    name: 'fernando',
    age: 36,
    address : 'Managua'
  }


  //Async Pipe
  public myObservabkeTimer:Observable<number> = interval(2000).pipe(
    tap(value=>console.log('tap:', value)) 
  );

  public promesa: Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa');
      console.log('Promesa');
    },3500);
  });

}
