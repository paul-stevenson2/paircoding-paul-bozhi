// function arrayOfArrays(arr) {
//     let newArray = []
//     for(let i = 0; i <arr.length; i++) {
//         let largest = arr[i][0]
//         for(let j =0; j <arr[i].length; j++){
//             if(arr[i][j]>largest){
//                 largest = arr[i][j]
//             }
//         }
//         newArray.push(largest)
//     }
//     return newArray
// }

//arrayOfArrays([[1,2,3],[4,5,6], [10,20,100]]) -> [3,6,100]

// Create a function to reverse an array

//revArray([1,2,3,4]) -> [4,3,2,1]

function revArray(arr) {
    let newArr = []
    for(let i = arr.length -1; i> -1; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console(revArray([1,2,3,4]))

const revArray = arr => arr.reverse()