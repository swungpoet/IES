import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    message: string;
    tituloMjs: string;
}

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog.component.scss"],
})

  export class DialogComponent implements OnInit {
    name:string = '';
    constructor(
      public dialog: MatDialog,
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    ngOnInit() {
    }

    cancelar(): void {
        this.dialogRef.close({numero: 0});
    }
    acepta(): void {
        this.dialogRef.close({numero: 1, data: this.name});
    }
    
  }