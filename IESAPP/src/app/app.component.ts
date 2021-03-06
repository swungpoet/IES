import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  sessionInitializer: boolean=false;

  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.homeAccess(0);
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  } 
  ngDoCheck() {
    console.log("ngDoCheck");
  } 
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  } 
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  } 
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  } 
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  homeAccess(e:any) {  
    console.log(e);
    if(localStorage.getItem('userLog')){
      console.log('ACCESS')
      this.sessionInitializer=true;
      this.router.navigate(["home"]);
    }else{
      console.log('NO ACCESS')
      this.sessionInitializer=false;
    }
  }

  salir(e:any) {  
    console.log(e);
    if(e){
      this.sessionInitializer=false;
    }
  }

}
