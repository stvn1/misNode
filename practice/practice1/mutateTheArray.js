function mutateTheArray(n, a) {

    let b = []
    
    for (let i = 0; i < n ; i++) {
        if( (i - 1) < 0 ){
            b[i] = 0 + a[i] + a[i + 1]
        }
        else if( (i + 1 ) > n-1){
            b[i] = a[i - 1] + a[i] ;
        }
        else{

            b[i] = a[i - 1] + a[i] + a[i + 1]
        }

        
    }



    return b; 

}

let n =5
let a = [4,0,1,-2,3]

console.log( mutateTheArray(n, a) )

