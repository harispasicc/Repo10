function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "cd",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002:{
            artist: "Dino Merlin",
            title: "Burek",
            release_year: 2004,
            formats: {
                1: "cd",
                2: "MP3",
                3: "DVD"
            },
            gold: true
        },
    };
    return myMusic;
}

myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;