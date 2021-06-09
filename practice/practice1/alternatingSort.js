const a = [1,3,5,6,4,2];
function alternatingSort(a){
    let b = [];

    for(let i = 0; i < a.length/2; i++){
        b.push(a[i]);
        b.push(a[a.length -1 -i ])
    }
    // return b;
    let flag = true;
    for(let i = 0; i < b.length; i++){
        if(b[i] > b[i+1]){
            flag = false;
        }
    }
    return flag;

}

console.log(alternatingSort(a))
