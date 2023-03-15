// ------------------------Problem 1------------------------
console.log(hello);                                   
var hello = 'world';                                                              
// --------------------undefined-----------------

// --------------------------------------------------------Problem 2------------------------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// // --------------magnet------------------

// // // --------------------------------------------------------Problem 3------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//  -------------------super cool--------------
// // ----------------------------------------------Problem 4------------------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// ---------------chiken 
// -------------half-chiken

// --------------------------------------------Problem 5------------------------
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean() a variable not a function

// // -----------------------------------------Problem 6------------------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// undefined
// rock
// r&b
// disco

// ---------------------------------------Problem 7------------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
// console.log(dojo);
// san jose
// seattle
// burbank
// san jose

// -------------------------------------Problem 8------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65))= true
// console.log(makeDojo("Berkeley", 0))= closed for now
