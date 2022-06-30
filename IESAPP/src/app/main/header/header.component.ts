import { Component, OnInit, Injectable, OnDestroy, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() loggON = new EventEmitter<any>();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authSvc: DataServiceService
  ) {
    

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
  onLogout():void{
    this.loggON.emit(1);
    this.authSvc.logout();
    this.router.navigate([""]);
  }
}
