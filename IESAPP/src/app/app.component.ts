import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  sessionInitializer: boolean=false;

  constructor(
    private router: Router
  ) {
    

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
  homeAccess(e: any) {
    console.log('HOLA ACCESS')
    this.sessionInitializer=true;
    this.router.navigate(["home"]);
  }
}
