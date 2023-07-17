import { Injectable } from '@angular/core';
import { ALLWORKS } from 'src/helper-files/work-db';
import { Work } from 'src/helper-files/work-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { 
    
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  getContent(): Work[] {
    return ALLWORKS;
  }

  getContentObs(): Observable<Work[]>{
    return this.http.get<Work[]>("api/work");
  }

  getSingleContent(index: string): Observable<any>{

    //Check for number value
    if(parseInt(index)){

      //Check if number is out of bounds
      if(parseInt(index) >= ALLWORKS.length || parseInt(index) < 0){
        return of(null);
      }
      else{
        return of(ALLWORKS[parseInt(index)]);
        //return this.http.get<Content[]>("api/content" + index); ???
      }
    }
    //0 doesn't pass parseInt() for some reason, set manually
    else if(index == "0"){
      return of(ALLWORKS[0]);
    }
    //Input is not a number
    else{
      return of(null);
    }
  }
}
