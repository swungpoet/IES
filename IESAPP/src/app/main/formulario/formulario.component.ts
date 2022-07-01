import { Component, OnInit, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogoServiceService } from '../../services/catalogo-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsernameValidator } from '../../utilerias/validator/name.validator';

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
  providers: [CatalogoServiceService]
})
@Injectable({
  providedIn: "root",
})
export class FormularioComponent implements OnInit {
  valibro:boolean = false;
  libros=[
      {titulo:'Libro 1', id:1},
      {titulo:'Libro 2', id:2},
      {titulo:'Libro 3', id:3},
      {titulo:'Libro 4', id:4}
    ];
  civil=[
    {edo:'Soltero', id:1},
    {edo:'Casado', id:2},
    {edo:'Divorciado', id:3}
  ];

  infoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),
    fumas: new FormControl(false, [Validators.required]),
    lectura: new FormControl(false, [Validators.required]),
    libro: new FormControl('', [Validators.required]),
    edoCivil: new FormControl('')
});

  constructor(
    private CatalogoServiceService: CatalogoServiceService,
    private _snackBar: MatSnackBar
  ) {
    

  }

  ngOnInit() {
    const data = {}
      this.CatalogoServiceService.postService('Catalogo/EstadoCivil', data).subscribe((res: any) => {
        if (res.err) {
          // error de user
        } else {
          // todo ok
        }
      },
      (error: any) => {
        this._snackBar.open(error.message,'Cerrar');
        // error de no conexion al servicio
      }
    );
  }

  validateUser() {
    if(this.infoForm.valid){
      this._snackBar.open('Éxito el formulario es válido','Cerrar');
    }else{
      this._snackBar.open('El formulario es invalidado ','Cerrar');
    }
  }

  revisaCombo(e:any) {
    console.log(e)
    if(e.checked){
      this.valibro=true;
    }else{
      this.valibro=false;
    }
  }

}
