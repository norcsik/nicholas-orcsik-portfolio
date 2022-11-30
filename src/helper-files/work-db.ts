import { Work } from "./work-interface";

//Create works
let work1: Work;
work1 = {
    id: 0,
    name: "BookNook",
    date: "Sep - Dec 2022",
    blurb: "A book searching and collection app for Apple devices.",
    description: "Proper paragraph talking about the project.", 
    imgs: ["https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"],
    tags: ["XCode", "iOS", "Swift", "API", "JSON"]
};

let work2: Work;
work2 = {
    id: 1,
    name: "MealMate",
    date: "Feb - Apr 2022",
    blurb: "A recipe searching app for Android devices.",
    description: "This project was an Android application developed with a parter, Osten Albaloo, " +
    "\nas the final project for the Java 3 course. It is a recipe app where users can " +
    "\nsearch for recipes, favourite them, and go through the instructions in a step-by- " +
    "\nstep format with a progress bar. " +
    "\n\nThe project used the MealDb API to fetch recipe information, including the " +
    "\ninstructions and ingredients. We used an SQLite database to create, read, update, " +
    "\nand delete recipes.", 
    imgs: [
        "https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png",
        "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
    ],
    tags: ["Java", "Android", "API", "SQLite"]
};

let work3: Work;
work3 = {
    id: 2,
    name: "The Lobster Trap",
    date: "Sep - Dec 2021",
    blurb: "A restaurant management app for keeping track of orders.",
    description: "Proper paragraph talking about the project.", 
    imgs: ["https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"],
    tags: ["Java", "IntelliJ", "SQL"]
};

let work4: Work;
work4 = {
    id: 3,
    name: "Tic Tac Tome",
    date: "Mar - Apr 2021",
    blurb: "A tic tac toe game written in JavaFX.",
    description: "Proper paragraph talking about the project.", 
    imgs: ["https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"],
    tags: ["Java", "IntelliJ", "Game"]
};

//Array of works
export let ALLWORKS: Work[] = [work1, work2, work3, work4];;