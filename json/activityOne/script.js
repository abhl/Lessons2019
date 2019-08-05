// Sneak peak of accessing JSON *wink wink nudge nudge* 

let bulbasaur = pokedex[0];
let charmander = pokedex[3];
let squirtle = pokedex[6];
let pikachu = pokedex[24];

/*
These variables contain objects that have the information about their respective pokemon

In this documentation I will be surrounding any property names with backticks which look like this : `property`
Those property names are what we use to find a specific piece of information in the object using the dot notation. (think ref.style.backgroundColor)

I recommend you try to console.log() any piece of information you get before you try to place it in HTML so that you know if you are accessing it properly

These are the properties contained in each of these variables: 
    1) the `id` property which contains the pokedex number of that pokemon ex: pikachu's id is 25
    2) the `name` property which contains another object containing the name of the pokemon in english, japanese, and chinese
        - We will be working with just the english names for now, and for that we will use the `english` property
        - To give you guys a reference here's how we access the english name of bulbasaur: bulbasaur.name.english
    3) the `type` property which contains an array that holds up to two elements, each element is a string containing one of the types of that pokemon
    4) the `base` property which is another object that contains these properties:
        4a) `HP`
        4b) `Attack`
        4c) `Defense`
        4d) `Sp. Attack`
        4e) `Sp. Defense`
        4f) `Speed`
    Hint: the `base` object has properties with dots in them, try using bracket notation (think ref.style["background-color"])
*/

/* Task 1) console.log() one of the pokemon on the console and explore the information inside */


/* Task 2) console.log() the `id` property of the pokemon, what does it output? */


/* Task 3) console.log() the `base` property of the pokemon, what does it output?  */


/* Task 4) console.log() the `HP` of the pokemon */

/* Task 5) Edit the `HP` of the pokemon */

/* Task 6) Try to console.log() `Sp. Attack` */