function findElement (arr ,target){
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true
        }
    }
        return false
    }
const g = findElement([1,2,3,7] ,0 )
console.log(g);
