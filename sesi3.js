// 1. membuat object dengan properties

const Restaurant = {
    name: "Restaurant Bukit Sagara",
    city: "Sukabumi",
    favoritedrink: "Milk Drink",
    favoritefood: "Bakso",
    isVegan: "true",
};
console.table(Restaurant);

// 2. variabel nama restaurant yang bertipe array dengan ketentuan berikut
const restaurant = ["nama restaurant :Bukit Sagara", "city : Sukabumi" , "favorite Drink : avocado juice" , "favorite Food : Nasi Goreng", "isVegan : true"]
const[firstName, secondCity, thirdFavoriteDrink, fourthFavoritefood, fiveisVegan] = restaurant;
console.log(firstName);
console.log(secondCity);
console.log(thirdFavoriteDrink);
console.log(fourthFavoritefood);
console.log(fiveisVegan);