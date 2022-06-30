import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from '../../services/data-service.service';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authSvc:DataServiceService){}

  canActivate(): Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => !isLogged)
      );
  }
  
}
