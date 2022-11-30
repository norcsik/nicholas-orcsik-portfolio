import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ALLWORKS } from 'src/helper-files/work-db';
import { Work } from 'src/helper-files/work-interface';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    //Setting it to the value of our array of works
      const work : Work[] = ALLWORKS;
      return {work};
  }
  
  genId(work: Work[]): number { 
    return work.length > 0 ? Math.max(...work.map(c => { return c.id ?? 0 })) + 1 : 2000;
  }
}
