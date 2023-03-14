// ** given Array,find two indexes ,such that their sum is equal t k(a given number)

//this method will not work on unsorted manner

// ~

 let array=[2,7,8,13,18];
// let array=[-4,-1,6,4,8];
// array.sort(function(a,b){
//   return a-b;
// })
console.log(array);
let k=21;
function twoSum(arr,k){
  let left=0;
  let right=arr.length-1;
  while(left<right)
  {
    let sum=arr[left]+arr[right];
    if(sum> k) right--;
    else if(sum<k) left++;
    else return console.log(arr[left],arr[right]) ;
  }
  return console.log("Not Possible");
}
twoSum(array,k);