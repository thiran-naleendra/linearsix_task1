// src/task1.js

// Task 1.1: Extend Date object with daysTo()
Date.prototype.daysTo = function (otherDate) {
    if (!(otherDate instanceof Date)) {
        throw new Error("Argument must be a Date object.");
    }
    const msPerDay = 24 * 60 * 60 * 1000;
    const startOfThisDate = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const startOfOtherDate = new Date(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate());
    return Math.floor((startOfOtherDate - startOfThisDate) / msPerDay);
};

// Task 1.2: Sort sales by Total
function calculateAndSortSales(sales) {
    return sales.map(sale => ({
        ...sale,
        Total: sale.amount * sale.quantity
    })).sort((a, b) => b.Total - a.Total);
}

// Task 1.3: Project object based on prototype
function projectObject(source, prototype) {
    if (typeof source !== 'object' || typeof prototype !== 'object' || source === null || prototype === null) {
        throw new Error("Both source and prototype must be valid objects.");
    }
    const result = {};
    for (const key in prototype) {
        if (source.hasOwnProperty(key)) {
            if (typeof prototype[key] === 'object' && prototype[key] !== null) {
                result[key] = projectObject(source[key], prototype[key]);
            } else {
                result[key] = source[key];
            }
        }
    }
    return result;
}

module.exports = { calculateAndSortSales, projectObject };
