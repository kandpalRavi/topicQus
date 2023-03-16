// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
function absoluteDiff(n,m,arr){
    // console.log((m-1)/2);

        let sum1=0;
        let sum2=0;
    function sumFirst(n,m,arr){
        let left =0;
        let right=m-1;
        let top=0;
        let bottom=n-1;
        let middle=(m-1)/2;
        
        for(let i=right;i>=middle;i--){
            sum1+=arr[top][i];
        }
        top++;
        for(let i=top;i<=bottom;i++){
            sum1+=arr[i][middle];
        }
        middle--;
        for(let i=middle;i>=left;i--){
            sum1+=arr[bottom][i];
        }
        return sum1;
    }
    function sumSecond(n,m,arr){
        let left =0;
        let right=m-1;
        let top=0;
        let bottom=n-1;
        let middle =(n-1)/2;
        for (let i=top;i<=middle;i++){
            sum2+=arr[i][left];
        }
        left++;
        for (let i=left;i<=right;i++){
            sum2+=arr[middle][i];
        }
        middle++;
        for(let i=middle;i<=bottom;i++){
            sum2+=arr[i][right];
        }
        return sum2;
    }
    
    sum1= sumFirst(n,m,arr);
    sum2= sumSecond(n,m,arr);
    console.log(Math.abs(sum1-sum2));
}