function sum(...numbers) {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

console.log(sum(1, 2, 3, 4, 5));