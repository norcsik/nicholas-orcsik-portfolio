import { Work } from "./work-interface";

//Create works
let work1: Work;
work1 = {
    id: 0,
    name: "BookNook",
    date: "Sep - Dec 2022",
    blurb: "A book searching and collection app for Apple devices.",
    description: "This is an app made for Apple devices, and was the final project for the " + 
    "\niOS 3 course. The app lets users search for books and add them to user created" + 
    "\nbookshelves so they can keep track of their collection, or create a wishlist." + 
    "\n\nThis projected implemented many new features learned during this course, " + 
    "\nsuch as CRUDable persistent data using Core Data, Spotlight Search, Gestures, " + 
    "\n& custom Launch Screens.", 
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
    "\nas the final project for the Android 3 course. It is a recipe app where users can " +
    "\nsearch for recipes, favourite them, and go through the instructions in a step-by- " +
    "\nstep format with a progress bar. " +
    "\n\nThe project used the MealDb API to fetch recipe information, including the " +
    "\ninstructions and ingredients. We used an SQLite database to create, read, update, " +
    "\nand delete recipes." +
    "\n\nFeatures include a search page, a recipe page with ingredients, instructions, " +
    "\nand a completion page, a favourites page, and a grocery list maker.", 
    imgs: [
        "assets/images/mealmate/search.jpg",
        "assets/images/mealmate/ingredients.jpg",
        "assets/images/mealmate/steps.jpg",
        "assets/images/mealmate/completion.jpg",
        "assets/images/mealmate/favourite.jpg",
        "assets/images/mealmate/lists.jpg",
        "assets/images/mealmate/write.jpg",
        "assets/images/mealmate/settings.jpg",
        
    ],
    tags: ["Java", "Android", "API", "SQLite"],
    links: ["https://github.com/daAus10/Android3Final"]
};

let work3: Work;
work3 = {
    id: 2,
    name: "The Lobster Trap",
    date: "Sep - Dec 2021",
    blurb: "A restaurant management app for keeping track of orders.",
    description: "This application is for the fictional restaurant The Lobster Trap. " + 
    "\nIts purpose is to create and keep track of orders. It also displays sales " + 
    "\ninformation to the user. The application consists of: An Account Settings page " + 
    "\non startup. An Orders tab which holds tabs for Creating tickets, Adding Orders, " + 
    "\nUpdating Orders, and Deleting Orders. A graphs tab which hold tables for pie " + 
    "\nchart of monthly order quantities, and bar chart of daily profits per month" + 
    "\n\nThis app was made in JavaFX for the final project of our Java 3 course.", 
    imgs: [
        "assets/images/lobster-trap/login.PNG",
        "assets/images/lobster-trap/tickets.PNG",
        "assets/images/lobster-trap/add.PNG",
        "assets/images/lobster-trap/update.PNG",
        "assets/images/lobster-trap/delete.PNG",
        "assets/images/lobster-trap/ordersGraph.PNG",
        "assets/images/lobster-trap/profitsGraph.PNG",
    ],
    tags: ["Java", "IntelliJ", "SQL"],
    links: ["https://github.com/norcsik/LobsterTrapApplication"]
};

let work4: Work;
work4 = {
    id: 3,
    name: "Brain Freeze",
    date: "Sep - Dec 2021",
    blurb: "An android app for a fictional ice cream parlor.",
    description: "This project is an android app is for the fictional Brain Freeze ice cream "+
    "\nparlour. The application is for ordering ice cream from their shop, finding " + 
    "\ninformation about the business, participating in contests, more!" + 
    "\n\nThe app was made as a final project for Android 2.", 
    imgs: [
        "assets/images/brain-freeze/menu.PNG",
        "assets/images/brain-freeze/order.PNG",
        "assets/images/brain-freeze/nav.PNG",
        "assets/images/brain-freeze/sundae.PNG",
        "assets/images/brain-freeze/contest.PNG",
        "assets/images/brain-freeze/post.PNG",
        "assets/images/brain-freeze/calculator.PNG",
        "assets/images/brain-freeze/catering.PNG",
        "assets/images/brain-freeze/locations.PNG",
        "assets/images/brain-freeze/settings.PNG",
    ],
    tags: ["Java", "Android"],
    links: ["https://github.com/norcsik/BrainFreezeApp"]
};

let work5: Work;
work5 = {
    id: 4,
    name: "Tic Tac Tome",
    date: "Mar - Apr 2021",
    blurb: "A tic tac toe game written in JavaFX.",
    description: "Tic Tac Tome is a game made in JavaFX for the final project of the " + 
    "\nJava 2 course." + 
    "\n\nThe game involves multiple features of JavaFX learned during the class," + 
    "\nincluding scenes, panes, animations, audio playing & fileIO. It plays " + 
    "\nlike a typical game of tic tac toe, except with two little mages placing" + 
    "\nrunes in a book. Points are awarded depending on how many turns a player " +
    "\ntakes during a game. There are various settings for round numbers " + 
    "\nand audio.", 
    imgs: [
        "assets/images/tic-tac-tome/menu.png",
        "assets/images/tic-tac-tome/game.PNG",
        "assets/images/tic-tac-tome/scores.PNG",
        "assets/images/tic-tac-tome/settings.PNG",
    ],
    tags: ["Java", "IntelliJ", "Game"]
};

//Array of works
export let ALLWORKS: Work[] = [work1, work2, work3, work4, work5];;