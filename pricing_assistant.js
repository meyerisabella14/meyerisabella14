let productName = "Lip Gloss";

let costPerUnit = 4.25;
let basePrice = 14.99;
let discountRate = 0.20;
let salesTaxRate = 0.075;
let fixedMonthlyCosts = 350;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product Name: " + productName);
console.log("Discounted Price: $" + discountedPrice.toFixed(2));
console.log("Final Price with Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units: " + breakEvenUnits);
console.log("Profitable Per Unit: " + isProfitablePerUnit);
