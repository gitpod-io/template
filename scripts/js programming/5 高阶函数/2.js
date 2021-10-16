function filter(array, test) { 
    let passed = []
    array.forEach(element => {
        if (test(element)){
           passed.push(element) 
        }
    });

    return passed
}

console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(s => s.direction == "ttb"));


function map(array, transform) { 
    let mapped = []
    array.forEach(element => {
        mapped.push(transform(element)) 
    });

    return mapped
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "ttb")
console.log(map(rtlScripts, s => s.name));