function myFunction(roar){
    lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    }
    delete lion[roar];
    return lion;
}

myFunction();
console.log(myFunction("roar"));

module.exports = myFunction;