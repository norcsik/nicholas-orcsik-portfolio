import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/helper-files/work-interface';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  //Get info from work card compo
  @Input() workDisplay?: Work;

  constructor() {

  }

  ngOnInit(): void {

  }

  infoDisplay(){

    //Put info into variables
    var id = this.workDisplay?.id;
    var name = this.workDisplay?.name;

    //Display info
    console.log("ID: " + id + "\nPRoject name: " + name);
  }

}
