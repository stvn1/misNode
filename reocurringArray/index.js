const names = ['a','b','c','c','d','c']
const price = [10 ,1, 2 ,2 ,4, 5]
const weigth = [1, 2, 2, 2, 4, 5]


// console.log(names.length, price.length, weigth.length)


let map = new Map();

for(let i = 0; i < names.length; i++){
    let occur = 0;
    for (let j = 0; j < names.length; j++) {
        if(names[i] == names [j]){
            occur ++;
        }
        if(occur > 1){
            map.set(i, names[i])
        }
    }
}

console.log(map)