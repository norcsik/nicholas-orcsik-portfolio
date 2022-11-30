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
  slideIndex: number;

  constructor(private route: ActivatedRoute, private workService: WorkService) { 
    this.workDisplay = {
      id: 0,
      name: "",
      description: "",
      blurb: "",
      date: "",
      imgs: [""]
    }

    this.slideIndex = 1;

    console.log("constructor");

    //Turn on the first image
    document.addEventListener('DOMContentLoaded', function() {
      console.log("Did the");
      let slides = document.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>;
      slides[0].style.display = "block";
    });

    setTimeout(function(){
      console.log("Did the");
      let slides = document.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>;
      slides[0].style.display = "block";
     }, 25);
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

  //IMAGE CAROUSEL FUNCTIONALITY//

  // Next/previous controls
  plusSlides(num: number) {
    this.showSlides(this.slideIndex += num);
  }

  // Thumbnail image controls
  currentSlide(num: number) {
    this.showSlides(this.slideIndex = num);
  }

  showSlides(num: number) {
    let slides = document.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>;

    if (num > slides.length) {
      this.slideIndex = 1
    }
    if (num < 1) {
      this.slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(i + " set to none");
    }

    console.log(this.slideIndex - 1 + " set to block");
    slides[this.slideIndex - 1].style.display = "block";
    
  } 

}
