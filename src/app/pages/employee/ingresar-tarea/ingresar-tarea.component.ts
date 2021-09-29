import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ingresar-tarea',
  templateUrl: './ingresar-tarea.component.html',
  styleUrls: ['./ingresar-tarea.component.scss']
})
export class IngresarTareaComponent implements OnInit {
  minDate: Date;
  min60: number = 60;
  min30: number = 30;
  min15: number = 15;
  total:number = 0;

  constructor() { 
    this.minDate = new Date();
  }
  
  sumar60():void{
     this.total = this.total + (this.min60/60);
  }
  sumar30():void{
    this.total = this.total + (this.min30/60);
 }
  sumar15():void{
  this.total = this.total + (this.min15/60);
}
  borrarMin():void{
    this.total=0;
  }
  

  ngOnInit(): void {
  }

}
