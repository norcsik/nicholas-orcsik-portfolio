import { Component, OnInit } from '@angular/core';
import { ALLWORKS } from 'src/helper-files/work-db';
import { Work } from 'src/helper-files/work-interface';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

  //New Array
  workList: Work[];

  //Initialize array and work service
  constructor() { 
    this.workList = ALLWORKS;
  }

  ngOnInit(): void {
  }

}
