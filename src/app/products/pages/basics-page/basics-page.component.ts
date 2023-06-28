import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower : string ='mario';
  public nameUpper : string = 'RAMOS';
  public fullName : string = 'MarIO RamoS'; 

  public dateNow : Date = new Date();
}
