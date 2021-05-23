/*
#### Object 1
- Matt Johnson
- Bart Paden
- Ryan Doss
- Jared Malcolm

#### Object 2
- Matt Johnson
- Bart Paden
- Jordan Heigle
- Tyler Viles
*/

// initialize Global Object
var calculation = {}

// Set the "ranAlready" property to "false"
calculation.ranAlready = false;

function calculateArray(){
    // If the calculation ran already, alert the user. Otherwise, do the calculation.
    if (calculation.ranAlready == true){
        alert("The duplicates have already been removed from the arrays. Please check the console.");
    }
    else{
        // Initialize the two given arrays.
        let arrayOne = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
        let arrayTwo = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

        /* Copy the contents of the first array into the third array. */
        var arrayThree = [...arrayOne];

        /* For every element in the second array, check if it exists in the third array.
        If it doesn't exist, add it to the third array. Otherwise skip it. */
        for(i = 0; i< arrayTwo.length; i++){
            if(arrayThree.includes(arrayTwo[i]) == false){
                arrayThree.push(arrayTwo[i]);
            }
        }

        // Sends an alert to the user with the data and the result
        alert("The first array is: " + String(arrayOne)
        + "\n\nThe second array is: " + String(arrayTwo)
        + "\n\nThe final array is: " + String(arrayThree)
        + "\n\n Data has also been printed to the console.");

        // prints the results to the console for redundancy 
        console.log(arrayOne);
        console.log(arrayTwo);
        console.log(arrayThree);
        
        // flips the boolean property to "true"
        calculation.ranAlready = true;
    }
    
};