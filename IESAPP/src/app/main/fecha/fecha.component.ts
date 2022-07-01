import { Component, OnInit, Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-fecha",
  templateUrl: "./fecha.component.html",
  styleUrls: ["./fecha.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class FechaComponent implements OnInit {
  dateSelect: any='';
  dateFinal: any='';
  calendar=[
    {fecha:'Día', id:1},
    {fecha:'Mes', id:2},
    {fecha:'Año', id:3}
  ];
  calendarioForm = new FormGroup({
    fecha: new FormControl<number>(0, [Validators.required]),
    numero: new FormControl<number | null>(0, [Validators.required, Validators.pattern('^[0-9]*$')])
  });
  constructor(
    private _snackBar: MatSnackBar,
  ) {

  }

  ngOnInit() {

  }

  dateDia(){
    let dt = new Date(this.dateSelect);
    this.dateFinal = new Date(dt.setDate(dt.getDate()+1));
  }

  aplicar(){
    let dt = new Date(this.dateSelect);
    this.dateFinal = new Date(dt.setDate(dt.getDate()+1));
    if(this.calendarioForm.value.fecha == 1){
      this._snackBar.open('Selecciono Día','Cerrar');
      let dt = new Date(this.dateFinal);
      let n: number = this.calendarioForm.value.numero || 0;
      this.dateFinal = new Date(dt.setDate(dt.getDate()+n));
    }else if(this.calendarioForm.value.fecha == 2){
      this._snackBar.open('Selecciono Mes','Cerrar');
      let dt = new Date(this.dateFinal);
      let n: number = this.calendarioForm.value.numero || 0;
      this.dateFinal = new Date(dt.setMonth(dt.getMonth()+n));
    }else if(this.calendarioForm.value.fecha == 3){
      this._snackBar.open('Selecciono Año','Cerrar');
      let dt = new Date(this.dateFinal);
      let n: number = this.calendarioForm.value.numero || 0;
      this.dateFinal = new Date(dt.setFullYear(dt.getFullYear()+n));
    }else{
      this._snackBar.open('Debe seleccionar almenos una fecha','Cerrar');
    }
  }

}
