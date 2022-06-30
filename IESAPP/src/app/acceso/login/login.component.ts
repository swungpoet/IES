import { Component, OnInit, Injectable, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from '../../services/data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [DataServiceService]
})
@Injectable({
  providedIn: "root",
})
export class LoginComponent implements OnInit, OnDestroy {
    userForm = new FormGroup({
        usuario: new FormControl('', [Validators.required]),
        psw: new FormControl('', [Validators.required])
    });
    anio: number;
    @Output() logON = new EventEmitter<any>();

    constructor(
      private DataServiceService: DataServiceService,
      private _snackBar: MatSnackBar
    ) {
        this.anio=new Date().getFullYear();
    }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  loginAut() {
    const data = {
      username: this.userForm.value.usuario, 
      password: this.userForm.value.psw
    }
    
    this.DataServiceService.postService('login',data).subscribe((res: any) => {
          if (res.err) {
            // error de user
            this.logON.emit(0);
          } else {
            // todo ok
            this.logON.emit(1);
          }
        },
        (error: any) => {
          console.log(error)
          if(error.error.mensaje == 'El usuario no existe'){
            this.logON.emit(0);
            this._snackBar.open(error.error.mensaje,'Cerrar');
          }else{
            this.logON.emit(1);
            this._snackBar.open(error.error.mensaje,'Cerrar');
          }
          
          // error de no conexion al servicio
        }
      );
      // this.logON.emit(1);
  }

}
