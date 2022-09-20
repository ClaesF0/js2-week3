//utils.mjs: This contains a function formatCurrency which will make 
//our item look more presentable e.g. 115 becomes “115.00 kr”.

function formatCurrency(amount, currencySymbol = "kr"){
    const formattedAmount = amount.toFixed(2);
    return`${formattedAmount}${currencySymbol}`
    //this will make it more understandable
};

export {formatCurrency}
