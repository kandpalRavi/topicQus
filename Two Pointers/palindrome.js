//not brute force approach
let arr=[a,b,b,b,a];
function pD(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]!=arr[right]) return false;
        left++,right--;
    }
    return true;
}
if(pD(arr)){
    console.log("palindrom");
}else{
    console.log("not palindrom");
}

