import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
