var players = {
    7: "Muahamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
}

function myFunction(myObj){
    var playerNumber = players[10];
    var player = playerNumber;
    return player;
}

console.log(myFunction());

module.exports = { players, myFunction };