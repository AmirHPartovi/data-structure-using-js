//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

function bubbleSort(array){
    for( let i = array.length - 1 ; i > 0 ; i--){
        for(let j = 0 ; j < i ; j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

function selectionSort(array){
    let min
    for( let i = 0 ; i < array.length-1 ; i++){
        min = array[i]
        for( let j = i+1 ;j < array.length ; j++){
            if(array[j] < min) min = array[j]
        }
        if( array[i] !== min){
            let temp = array[i]
            array[i] = min
            min = temp
        }
    }
    return array
}

function insertionSort(array){
    let temp , j
    for(let i = 1 ; i < array.length ; i++){
        temp = array[i]
        for(j = i-1 ; array[j] > temp && j > -1 ;j--){
            array[j+1] = array[j]
        }
        array[j+1] = temp
    }
    return array
}

//merge sort

function merge(arr1 ,arr2){
    let combined = []
    let i = 0
    let j = 0
    while( i < arr1.length && j < arr2.length){
        if(arr1[i]  < arr2[j]){
            combined.push(arr1[i])
            i++
        }else{
            combined.push(arr2[j])
            j++
        }
    }while( i < arr1.length){
        combined.push(arr1[i])
        i++
    }
    while( j < arr2.length){
        combined.push(arr1[j])
        j++
    }
    
    return combined
} 
function mergeSort(array){
    if(array.length === 1) return array
    
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}


let arr1=[1 , 6, 9, 3, 8 ,55 ,23 ,90 , 4 ,12 , 18 , 1 , 7 , 15]

console.log(`bubble sort result : ` ,bubbleSort(arr1))
console.log(`selection  sort result : ` ,selectionSort(arr1))
console.log(`insertion  sort result : ` ,insertionSort(arr1))
console.log(`merge function (not sorted ) result : ` ,merge(arr1,[5,8,2,1,0,9,0,3,7]))
console.log(`merge sort result : ` ,mergeSort(arr1))