const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, transactions) {
  return transactions.filter(trans => trans.id === id)
}

function itemQuantity(id, transactions) {
  let transForId = transactionsFor(id, transactions);

  return transForId.reduce((sum, trans) => {
    let amount = trans.movement === "in" ? trans.quantity : -trans.quantity;
    return sum += amount;
  }, 0)
}

function isItemAvailable(id, transactions) {
  return itemQuantity(id, transactions) > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
console.log(itemQuantity(101, transactions)); // -1
console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]