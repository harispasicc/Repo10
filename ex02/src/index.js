var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};

function myFunction(myObj){
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return { hatValue, shirtValue, shoesValue};
}

console.log(myFunction());

module.exports = myFunction(myClothes);
