//sum numbers
function sumInput(arr) {
    let sum = 0;
    for (let number of arr) {
      sum += number;
    }
    return sum;
  }
  
  arr = [1,2,3,4,5,6]
  
  alert(sumInput(arr));
  
  
  //maxumum sunArray
  function getMaxSubSum(arr) {
      let maxSum = 0;
      let partialSum = 0;
    
      for (let item of arr) { 
        partialSum += item; 
        maxSum = Math.max(maxSum, partialSum); 
        if (partialSum < 0) partialSum = 0; 
      }
    
      return maxSum;
    }
  