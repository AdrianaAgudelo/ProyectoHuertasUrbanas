import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public http: HttpClient) { }
  
  url="https://localhost:7163/api/"
  
  public async get(controlador:string){
    var response:any
    await this.http.get(this.url+controlador).toPromise().then(res=>{
      response=res
      console.log(res)
    }
    );
    return response
  }

  public async post(controlador:string, object:any){
    var response:any
    await this.http.post(this.url+controlador, object).subscribe(res=>{
      response=res
    }
    );
    return response
  }

  public async put(controlador:string, id:number, object:any){
    var response:any
    await this.http.put(this.url+controlador+"/"+id, object).subscribe(res=>{
      response=res
    }
    );
    return response
  }

  public async delete(controlador:string, id:number){
    var response:any
    await this.http.delete(this.url+controlador+"/"+id).subscribe(res=>{
      response=res
    }
    );
    return response
  }
}
