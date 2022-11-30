import { Work } from "./work-interface";

//Create works
let work1: Work;
work1 = {
    id: 0,
    name: "BookNook",
    date: "Sep - Dec 2022",
    blurb: "A book searching and collection app for Apple devices.",
    description: "Proper paragraph talking about the project.", 
    img: "https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png",
    tags: ["XCode", "iOS", "Swift", "API", "JSON"]
};

let work2: Work;
work2 = {
    id: 1,
    name: "MealMate",
    date: "Feb - Apr 2022",
    blurb: "A recipe searching app for Android devices.",
    description: "Proper paragraph talking about the project.", 
    img: "https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png",
    tags: ["Java", "Android", "API", "SQLite"]
};

let work3: Work;
work3 = {
    id: 2,
    name: "Tic Tac Tome",
    date: "Mar - Apr 2021",
    blurb: "A tic tac toe game written in JavaFX.",
    description: "Proper paragraph talking about the project.", 
    img: "https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png",
    tags: ["Java", "IntelliJ", "Game"]
};

//Array of works
export let ALLWORKS: Work[] = [work1, work2, work3];;