function binarySearch (arr,target){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end){
    let mid = Math.floor(start + end/2)

    if(arr[mid] === target){
      return true
    }else if(arr[mid] < target){
      start = mid + 1;

    }else {
      end = mid - 1;
    }
  }

  return false
}

const r = binarySearch([3,6,9,12,15,18,21],)

console.log(r);

