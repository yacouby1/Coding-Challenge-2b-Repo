let itemName = "Vape Starter Kit";
let unitCost = 11.25;
let currentStock = 67;
let reorderLevel = 19;
let targetStock = 100;
let weeklyDemand = 65;
let supplierLeadTimeWeeks = .5;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock<= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Item name:", itemName);
console.log("Weeks of cover", weeksOfCover.toFixed(2));
console.log("Reorder now:", reorderNow); 
console.log("Recomended reorder quantity:", reorderQuantity);
console.log("Estimated reorder cost:", estimatedReorderCost); 