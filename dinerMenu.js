```
Build out a Diner menu in JAVASCRIPT. Here are your instructions to build that Diner.
Bottega Diner
Have the Main Menu and a Sides Menu
You get one entree and two side choices at regular cost.
- show them the entire menu (print out)
- A user selects an entree.
- “Waitress” makes a comment based on their selection
- comment can either be a comparison of the two items, or random comment pulled from a comment vault.
- Tell them the price
- repeat the above options for side choices (comment and a price)
- total up the cost

BONUS
Have breakfast, lunch, and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

BONUS: Allow for item customization (how items are prepared, decide additional cost implications)

```

function dinerMenu (breakfast, lunch, dinner, currentSelection, totalPrice) {
    let dinerGreeting = "Welcome to the Bottega Diner!";
    console.log(dinerGreeting());

    function menuPrinter(currentSelection, totalPrice, breakfast, lunch, dinner);
        console.log(prompt(`What menu would you like today? Please enter: ${breakfast}, ${lunch} or ${dinner}`, ""));
        
        class breakfastMenu {
        // Implement 'this' constructor for class

            if (menuPick = 'breakfast') {
                menuPrinter = breakfast;

                function breakfastMenu (breakfast) {

                    console.log(breakfast(`1. ${bEntreeOne}`, `2. ${bEntreeTwo}`, `3. ${bEntreeThree}`, `4. ${bEntreeFour}`)));
                    var breakfastChoice = prompt("All prices reflect your entree of choice. What would you like for breakfast? Type the corresponding number to what you would like, or 'go back' to return.", "");

                    breakfastChoice === true;

                    function breakfastOrder (breakfastChoice, breakfastSides, sideSelection, totalPrice) {
                    
                        if (breakfastOrder = true) {
                            if (breakfastChoice = 1) {
                                let currentSelection = breakfastChoiceOne
                                console.log(totalPrice(`Your current total is ${bPriceOne}`));
                                console.log(currentSelection);
                                console.log(breakfast(breakfastSides(`Toast selection: \n 1. ${toastOne} \n 2. ${toastTwo} \n 3. ${toastThree} \n 4. ${toastFour} \n Potato sides: 1. ${potatoOne} \n 2. ${potatoTwo} \n 3. ${potatoAlt}`)))
                                console.log(prompt('What would you like on the side?', ""));
                            
                            } else if (breakfastPick = 2) {
                                let currentSelection = breakfastChoiceTwo
                                console.log(total(`Your current total is ${bPriceTwo}`))
                                console.log(currentSelection)
                                console.log(breakfast(breakfastSides(`Toast selection: \n 1. ${toastOne} \n 2. ${toastTwo} \n 3. ${toastThree} \n 4. ${toastFour}`)))
                                console.log(prompt('What would you like on the side?', ""))
                            
                            } else if (breakfastPick = 3) {
                                let currentSelection = breakfastChoiceOne
                                console.log(total(`Your current total is ${bPriceOne}`))
                                console.log(currentSelection)
                                console.log(breakfast(breakfastSides(`Toast selection: \n 1. ${toastOne} \n 2. ${toastTwo} \n 3. ${toastThree} \n 4. ${toastFour}`)))
                                console.log(prompt('What would you like on the side?', ""))


                            } else if (breakfastPick = 4) {
                                let currentSelection = breakfastChoiceOne
                                console.log(total(`Your current total is ${bPriceOne}`))
                                console.log(prompt('What would you like on the side?'))
                                console.log(breakfast(breakfastSides(`Toast selection: \n 1. ${toastOne} \n 2. ${toastTwo} \n 3. ${toastThree} \n 4. ${toastFour}`)))
                                console.log(prompt('What would you like on the side?', ""))
                            }; 
                        } else if (breakfastOrder = 'go back') {
                            breakfastChoice = false;
                            console.log(menuPick())
                        };

                    function sideSelection (sides) {
                    
                    }; 

                console.log(breakfastMenu())
                };

                class lunchMenu {
                    
                }
            };

        };

        
        // else if (menuPick = 'lunch') {
        //     console.log(lunch)
        //         let lunchPick = prompt("What can I get for you?", "")
        // };

        // else if (menuPick = 'dinner') {
        //     console.log(dinner)
        //         let dinnerPick = prompt("What can I get for you?", "")
        // }

        // menu selection
    
            // select entree function (by id?)

                // waitress comment function

                // price function

            //  select side function (2 values)

                // waitress comment

                // print price function

                
                // function totalPrice (entreePrice, drink, tip){
                    
                }
            };
            
console.log(menuPrinter())
console.log(dinerMenu())

breakfast = {   
    breakfastEntrees = {
       bEntreeOne: '2 eggs, 2 slices bacon',
       bEntreeTwo: '1 egg, 1 skirt steak',
       bEntreeThree: 'italian breakfast skillet',
       bEntreeFour: 'cheese and mushroom omelet'
    },
    breakfastSides = {
        bSideOne = {
            toastOne = 'white bread',
            toastTwo = 'sourdough bread',
            toastThree = 'wheat bread',
            toastFour = 'rye bread'
        },
        bSideTwo = {
            potatoOne = 'hash browns',
            potatoTwo = 'fries',
            potatoAlt = 'cup of fruit'
        }
    }
}
breakfastPrice = {
    bPriceOne = 5.95,
    bPriceTwo = 7.95,
    bPriceThree = 7.95,
    bPriceFour = 6.95
}

lunchDinner = {
    lunDinEntree = {
        ldEntreeOne = "hamburger",
        ldEntreeTwo = "reuben sandwich",
        ldEntreeThree = "BLT sandwich",
        ldEntreeFour = "triple-decker club sandwich",
        ldEntreeFive = "gyro sandwich"
    },
    sides = {
        sideOne = "french fries",
        sideTwo = "onion rings",
        sideThree = "table salad",
        sideFour = "cup of fruit"
    },
    soupOfTheDay = {
        soupOne = "baked french onion",
        soupTwo = "cream of chicken w/ rice"
    }
}

lunchDinnerPrice = {
    lunchPrice ={
        lEntreeOne = 8.95,
        lEntreeTwo = 8.65,
        lEntreeThree = 6.95,
        lEntreeFour = 7.75,
        lEntreeFive = 9.95,
    },

    dinnerPrice ={
        dEntreeOne = 10.95,
        dEntreeTwo = 10.65,
        dEntreeThree = 8.95,
        dEntreeFour = 9.75,
        dEntreeFive = 11.95,
    },
}

beverage = {
    beverageOne = 'soda',
    beverageTwo = 'coffee',
    beverageThree = 'juice',
    beverageFour = 'water'
}

