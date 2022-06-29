import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
  ) {
    

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
