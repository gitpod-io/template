function reduce(array, combine, start) {
    console.log("start ==>", start);
    let current = start;
    array.forEach(element => {
        current = combine(current, element)
        console.log("current ==>", current);

    });

    return current;
}

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log([1, 2, 3, 4].reduce((a, b) => a + b));


