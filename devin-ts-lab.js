//Tallest Mountain
var mountains = [
    { name: "Killimanjaro", height: 19341 },
    { name: "Denali", height: 20310 },
    { name: "Everest", height: 29029 },
];
var findNameOfTallestMountain = function (mountains) {
    var tallest;
    for (var i = 0; i < mountains.length; i++) {
        tallest = Math.max(mountains[i].height);
    }
    console.log(tallest);
    return tallest;
};
findNameOfTallestMountain(mountains);
var products = [
    { name: "cactus", price: 10 },
    { name: "snake plant", price: 13 },
    { name: "pothos", price: 10 },
];
var calcAverageProductPrice = function (products) {
    var average;
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        console.log(products[i].price);
        var average_1 = (sum += products[i].price) / products.length;
    }
    console.log(average);
    return average;
};
calcAverageProductPrice(products);
var inventory = [
    { product: product, : .name, 'motor': , product: product, : .price, 10.00: , quantity: 10 },
    { product: product, : .name, 'sensor': , product: product, : .price, 12.50: , quantity: 4 },
    { product: product, : .name, 'LED': , product: product, : .price, 1.00: , quantity: 20 },
];
