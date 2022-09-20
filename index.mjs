
import { calculateTax } from './tax.mjs';
import { formatCurrency } from './utils.mjs';
import { displayAmount } from './display.mjs'; 

//if the tax percentage is 15 
//price is 100
//if i want to calculate the tax
// divide by hundred, multiply by 15

//amount + amount * (tax percentage / 100)

const itemPrice = 100;
const tax = 15;

const itemPriceWithTax = calculateTax(itemPrice, tax);
console.log("itemPriceWithTax",itemPriceWithTax)

// toFixed()
let num = 5.56743;
//i want to round this number ^
let fixedNum = num.toFixed();
// to have TWO DECIMALS let fixedNum = num.toFixed(2);

console.log(fixedNum);

const formattedItemPriceWithTax = formatCurrency(itemPriceWithTax,"ZAR");
console.log(formattedItemPriceWithTax);

displayAmount(formattedItemPriceWithTax);
