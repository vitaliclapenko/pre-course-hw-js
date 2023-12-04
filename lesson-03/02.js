

const words = ["яблоко", "банан", "апельсин", "манго", "киви"];


function shop () {
    const wordsFruts = words.indexOf("апельсин");
    if(wordsFruts !== -1){
        console.log("Ура! нашел");
    } else {
        console.log("Придется поискать в другом магазине...")
    } 
}

shop();