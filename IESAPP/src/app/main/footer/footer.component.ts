import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class FooterComponent implements OnInit, OnDestroy {
   anio: number;

  constructor(
  ) {
    this.anio=new Date().getFullYear();
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
