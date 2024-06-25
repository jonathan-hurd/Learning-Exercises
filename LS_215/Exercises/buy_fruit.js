function buyFruit(list) {
  return list.reduce((newList, [fruit, num]) => {
    for (let i = 0; i < num; i += 1) {
      newList.push(fruit);
    }
    return newList;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]