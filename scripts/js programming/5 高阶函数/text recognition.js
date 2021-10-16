function countBy(items, groupName) {
    let counts = []

    items.forEach(element => {
        let name = groupName(element)

        console.log(`${element} counts ==>`, counts, "  name ==>", name);

        // 遍历counts ==> c是它的子项
        // let known = counts.findIndex((c,index) =>{ 
        //     console.log(`${index} c ==>`, c.name, c.count);
        //     c.name === name
        // })
        let known = counts.findIndex(c => c.name === name )
        console.log("known ==>", known);

        if (known == -1) {
            counts.push({name, count: 1})
        } else {
            counts[known].count++;
        }
    });

    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

// console.log("[] -->", [].findIndex(c => c.name));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none"
    }).filter(({name}) => name != "none")

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) {
        return "No scirpts found"
    }

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)} % ${name}`
    }).join(",")
}

console.log(textScripts("英国的狗说'woof", "俄罗斯的狗说'Гав'"));