var myPet = {
    species: "Husky",
    name: "Rex",
    legs: 4,
    friends: ["Muki", "Lea"]
}

function myFunction(myObj){
    return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };