import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  ROOT_URL: string = environment.URL


  constructor(private http: HttpClient) { }



  getAds(key:any) {
    return this.http.get<any>(`${this.ROOT_URL}/search/${key}`)
  }
  getAll(){
    return this.http.get<any>(`${this.ROOT_URL}/allcompanies`)
  }

}
