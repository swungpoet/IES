import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "../../utilerias/dialog/dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class HomeComponent implements OnInit, OnDestroy {
  name: string = '';

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data:{
        message: 'Escribe tu nombre!',
        tituloMjs: 'Nombre:'
    },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.numero === 1) {
          console.log('The dialog was closed');
          this.name = result.data;
        } else {
          //this.spinner = false;
        }
      } else {
          //this.spinner = false;
      }
    });
  }

}
