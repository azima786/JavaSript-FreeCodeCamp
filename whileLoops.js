// var myArray = []

// var i =0;

// // while (i<5){
// //     myArray.push(i)
// //     i++
// // }


// for(var i =0; i<5; i++){
//     myArray.push(i) // to add the numbers to array

// }
// console.log(myArray)


// var myArr = [2,3,4,5,6]

// var total =0
// for(i=0; i<myArr.length; i++){
//     total+=myArr[i]
// }

// console.log(total)

function multiplyAll(arr){
    var product = 1;

    for(var i=0; i<arr.length; i++){
        for(var j= 0; j<arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product
}


var multiple = multiplyAll([[1,2],[3,4], [5,6,7]])

console.log(multiple)