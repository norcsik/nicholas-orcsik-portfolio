import { Work } from "./work-interface";

//Create works
let work1: Work;
work1 = {
    id: 0,
    name: "TEST",
    date: "November 25, 2022",
    blurb: "Little blurb here",
    description: "Proper paragraph talking about the project.", 
    img: "The path for the image will go here",
    tags: ["Java", "Android", "Kotlin"]
};

//Array of works
export let ALLWORKS: Work[] = [work1];;