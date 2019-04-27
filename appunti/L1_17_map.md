# map

map transforms the elements in the array. To what? That’s the beauty: it’s up to you. Do you have objects that contain numbers, but you really just need the numbers? Easy. Does your array contain functions, and you need promises? Easy. Whenever the array is in one format and you need it in another, use map. Both map and filter return copies, and do not modify the original array. Let’s see some examples:

```javascript
const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8); 
const lcNames = names.map(String.toLowerCase);
// ["Widget", "Gadget"]
// [9.95, 22.95]
// [7.96, 18.36]
// ["widget", "gadget"]
```

You may be wondering how lcNames is working: it doesn’t look like the others. All of the methods we’re discussing that take functions, including map, don’t care how you pass the function in. In the case of names, prices, and discountPrices, we’re con‐ structing our own custom function (using the arrow notation). For lcNames, we’re using a function that already exists, String.toLowerCase. This function takes a single string argument and returns the lowercased string. We could as easily have written ```names.map(x ⇒ x.toLowerCase())```, but it’s important to understand that a function is a function, no matter what form it takes.

Consider this example where we have our items and corresponding prices in two separate arrays, and we want to combine them:
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i]}));
// cart: [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]
