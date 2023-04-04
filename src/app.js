function arrayOfArrays(arr) {
    let newArray = []
    for(let i = 0; i <arr.length; i++) {
        let largest = arr[i][0]
        for(let j =0; j <arr[i].length; j++){
            if(arr[i][j]>largest){
                largest = arr[i][j]
            }
        }
        newArray.push(largest)
    }
    return newArray
}

//arrayOfArrays([[1,2,3],[4,5,6], [10,20,100]]) -> [3,6,100]