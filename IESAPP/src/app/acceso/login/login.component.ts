import { Component, OnInit, Injectable, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
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
    ) {
        this.anio=new Date().getFullYear();
    }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  loginAut() {
    this.logON.emit(1);
  }

}
