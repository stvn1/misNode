function findPairsSummingToK(a, m, k) {

    let i, j, sum, count,x;
    count = 0;

    for(i = 0; i < a.length; i++){
        if((i + m) > a.length)
        {
            break;   
        }
        let temp = a.slice(i, i+m)
        console.log(temp)


        loop1:
        for(j = 0; j <  temp.length; j++){
            for(x =0; x < temp.length; x++){
                if((temp[j] + temp[x]) == k && j!=x){
                    count++;
                    j++;
                    break loop1;
                }

            }

        }
    }
    return count;
}


console.log(findPairsSummingToK([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10))