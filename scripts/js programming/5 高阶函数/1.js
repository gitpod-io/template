function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        action(i)
    }
}

// repeat(5, console.log)

// 可以不预定函数
let labels = []
repeat(5, i => {
    labels.push(`Unit ${i + 1}`)
})

console.log(labels);

// 高阶函数 ==> 对其他函数就行操作(其他函数入参/被返回)
function greaterThan(n) {
    console.log("n ==>", n);
    // return m => {
    //     console.log("m", m, "==== n", n);
    //     m > n
    // };
    return m => m > n;
}

// 结果 func xxx(m){ return m > 10 }
let greaterThan10 = greaterThan(10)
console.log("greaterThan10 ==>", greaterThan10);
// xxx(m) 打印
console.log(greaterThan10(11));

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args)
        console.log("called with", args, ", returned", result);
        return result;
    }
}

// noisy(f)(args)
noisy(Math.min)(4, 5, 6)

function unless(test, then) {
    if (!test) {
        then();
    }
}

repeat(3, n => {
    console.log("n % 2 == ", n % 2 == 1);
    unless(n % 2 == 1, ()=>{
        console.log(n, "is even");
    })
})



