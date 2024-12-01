const productIds = [2,4]

const placeholders = productIds.map(() => '?').join(',');
console.log(placeholders)
