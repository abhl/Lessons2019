/* For this activity, feel free to make use of your code from any of the previous activities. It's HIGHLY encouraged

Your mission, should you choose to accept it is to follow the tasks listed below. (You have no choice in this. It's been accepted on your behalf.) 
    - Note: The json file for all of the pokemon is stored in a variable called pokedex
*/

/* If you decide to make use of and/or reference your previous code you can place it in this comment so it doesn't run.

*/

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

/* Task 1) console.log(pokedex) */

/* Task 2) console.log(pokedex[0]) */

/* Task 3) console.log() the `id` property of the pokemon, what does it output? */


/* Task 4) console.log() the `base` property of the pokemon, what does it output?  */


/* Task 5) console.log() the `HP` of the pokemon */

/* Task 6) Edit the `HP` of the pokemon */

/* Task 7) Try to console.log() `Sp. Attack` */


/* Challenge Task 1) Create a form that asks for the pokedex number and uses that to place the information of the pokemon that corresponds to that number on the page
    Rules: 
        - Any additions to the HTML aside from the form and whatever goes inside of that is NOT allowed.
    Hints:
        - Your code from activity two does most of the work for you
        - Remember array indices start at 0, the id of the pokemon isn't necessarily it's index in the array. 
*/




/* Challenge Task 2) Add Styling to the previous task (There is a challenge task as well, so consider if you want to spend the rest of your time on this task. I recommend you try the challenge)
    Rules: 
        - CSS editing is fair game (Adding style in the function also works)
        - No HTML editing aside from linking a css file should you choose to go that route
    Hints:
        - If you managed to do styling in one of the previous activity, it'll help here
*/




/* Challenge Task 3) Edit your code so you can put in the name of the pokemon instead of the pokedex number to get it's info (If you manage to finish this, help out those around you)
    Rules:
        - Any additions to the HTML aside from the form and whatever goes inside of that is NOT allowed.
    Hints:
        - You need to iterate over the entire json file
        - You need to use an if statement to check if you're looking at the correct pokemon
*/



