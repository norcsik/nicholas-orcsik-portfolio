import { Component, OnInit } from '@angular/core';
import { Work } from 'src/helper-files/work-interface';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {

  id?: string;
  workDisplay?: Work;

  constructor(private route: ActivatedRoute, private workService: WorkService) { 
    this.workDisplay = {
      id: 0,
      name: "",
      description: "",
      blurb: "",
      date: ""
    }
  }

  ngOnInit(): void {

    //Getting id for route
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("ID NOT SET");
      }

      //Get the id of the content or set to 0
      this.id = params.get('id') ?? "0"; // uses the + unary operator

      //Use the id to get a single piece of content
      this.workService.getSingleContent(this.id).subscribe(singleWork => {
        this.workDisplay = singleWork;
      });
    });
  }

}
