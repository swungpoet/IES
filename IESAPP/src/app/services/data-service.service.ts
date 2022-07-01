import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs'
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from "@angular/router";
// import { JwtHelperService } from '@auth0/angular-jwt';


// const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  headers: HttpHeaders;
  url: string;

  constructor(private http: HttpClient, private router: Router) {
    
    this.checkLogin();
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.url = environment.serviceUrl;
    
   }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  getService(ruta: string, headers?: HttpHeaders) {
    if (headers) { this.headers = headers; }
    return this.http.get(this.url + ruta, { headers: this.headers });
  }

  postService(ruta: string, body?: any, headers?: HttpHeaders): Observable<any> {
    if (headers) { this.headers = headers; }
    return this.http.post(this.url + ruta, body, { headers: this.headers })
      .pipe(
       map((res: any) => {
        this.saveLog(res);
        this.loggedIn.next(true);
        return res;
       }),
      catchError((err)=> this.handlerError(err))
    );
  }

  putService(ruta: string, body?: any, headers?: HttpHeaders) {
    if (headers) { this.headers = headers; }
    return this.http.put(this.url + ruta, body, { headers: this.headers });
  }

  deleteService(ruta: string, data: any, headers?: HttpHeaders) {
    if (headers) { this.headers = headers; }
    return this.http.delete(this.url + ruta + '?' + data, { headers: this.headers });
  }

  logout():void{
    localStorage.removeItem('userLog');
    this.loggedIn.next(false);
    this.router.navigate([""]);
  }

  private  checkLogin(): void{
    const userToken = localStorage.getItem('userLog')
    //const isExpired = helper.isTokenExpired(userToken as string);
    //console.log('expiro', isExpired)
    //isExpired ? this.logout() : this.loggedIn.next(true);
  }

  private  saveLog(res: string): void{
    console.log(res);
    localStorage.setItem('userLog', 'Acceso');
  }

  private handlerError(error: any): Observable<never> {
    let errorMessage ='Error al recibir la data';
    if(error){
      errorMessage=`Error: code ${error.message}`
    }
    // window.alert(errorMessage);
    return throwError(error);
  }
 
}
