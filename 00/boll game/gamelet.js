let orderTot = 20.55;
let itemPurchase = "JS all in one";
let customer = "Jenny Kenedy";

let thankYou = `Dear, ${customer}, thank you for your order of ${itemPurchase}, The total amount ${orderTot} will be deducted`;

console.log(thankYou);

// //String functions-----------------------------------
// console.log(customer.charAt(4));
// console.log(customer.concat(" -", itemPurchase));
// console.log(customer.indexOf("K"));
// console.log(customer.split(" "));
// console.log(customer.slice(4, 8));
// console.log(customer.toLowerCase());
// console.log(customer.replace("Jenny", "Jack"));
// console.log(customer.toUpperCase());

// //number Functions ----------------------------------
// console.log(parseInt(orderTot));
// console.log(parseFloat(orderTot));

// Falsy - false, 0, -0, 0n. "",null, undefined, NaN

// True - everything else
//

// --------------------Ternary operator

const de = new Date();
console.log(`today is ${de.getDate()} of ${de.getUTCMonth()}`);
