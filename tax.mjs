function calculateTax(amount, taxPercentage){
//calculates the tax
    return amount + amount * (taxPercentage / 100);
};

export {calculateTax}