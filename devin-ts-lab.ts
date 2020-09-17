//Tallest Mountain

interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Killimanjaro", height: 19341 },
  { name: "Denali", height: 20310 },
  { name: "Everest", height: 29029 },
];

let findNameOfTallestMountain = (mountains: Mountain[]) => {
  let tallest;
  for (let i = 0; i < mountains.length; i++) {
    tallest = Math.max(mountains[i].height);
  }
  console.log(tallest);
  return tallest;
};

findNameOfTallestMountain(mountains);

//Products

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "cactus", price: 10 },
  { name: "snake plant", price: 13 },
  { name: "pothos", price: 10 },
];

let calcAverageProductPrice = (products: Product[]) => {
  let average;
  let sum: number = 0;
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].price);
    let average = (sum += products[i].price) / products.length;
  }
  console.log(average);
  return average;
};

calcAverageProductPrice(products);


interface InventoryItem {
  product: Product; any;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {product.name: 'motor', product.price: 10.00, quantity: 10 },
  {product.name: 'sensor', product.price: 12.50, quantity: 4 },
  {product.name: 'LED', product.price: 1.00, quantity: 20 },
]