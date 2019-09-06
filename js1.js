/*
Concept 1 - Basic Variables
Create variables of any value for the following names and types:
t1 - number
t2 - string
t3 - boolean
t4 - array
*/

//Concept 1
var x = 0
var t1 = 1;
var t2 = "string";
var t3 = true;
var t4 = [1,2];

/*
Concept 2 - Simple Function Returns
Create a function named myFunctionOne that returns the number 3.
*/

//Concept 2
function myFunctionOne() {
    return 3;
}

/*
Concept 3 - Parameters 1
Create a function named myFunctionTwo with two parameters that returns their sum.
*/

//Concept 3
function myFunctionTwo(num1, num2){
    return num1 + num2;
}

/*
Concept 4 - Parameters 2
Create a function named myFunctionThree with three parameters that returns all of the parameters multiplied.
*/

//Concept 4
function myFunctionThree(num1, num2, num3){
    return num1*num2*num3;
}

/*
Concept 5 - Parameters 3
Create a function named myFunctionFour with two parameters that returns their sum if one of them isn't zero and returns false if one of them is zero.
*/

//Concept 5
function myFunctionFour(num1, num2){
    // Direction slightly unclear, assuming that if either is zero the return value should be false
    if (num1*num2 == 0){
        return false;
    }
    return num1+num2;
}


//TESTING FUNCTIONS - DO NOT TOUCH ANYTHING BELOW THIS POINT
module.exports = { myFunctionOne, myFunctionTwo, myFunctionThree, myFunctionFour }