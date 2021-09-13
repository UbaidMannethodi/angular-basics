import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient) { }
    getEmployees(data: any){
      return this.http.post<any>('https://jsonplaceholder.typicode.com/posts',data);
  
    }

}
