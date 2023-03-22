k=3;
arr=[1,2,3,4,5];
n=5;


function twoDiff(n,k,arr){
    let first=0;
    let second=1;
    while(first<n&& second<n){
        if(first==second) second++;
        let temp=arr[second]-arr[first];
        if(temp==k) return "Yes";
        else if (temp<k) second++;
        else first++;
    }
    return "No";
}