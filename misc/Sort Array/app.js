function SortArray(sArr){
    for(i = 0; i < sArr.length; i++){
        for(ii = i + 1; ii < sArr.length; ii++){
            if(sArr[ii] < sArr[i]){
                var temp = sArr[i];
                sArr[i] = sArr[ii];
                sArr[ii] = temp;
            }
        }
    }
    return(sArr);
}
var arr = [8,6,7,5,3,0,9];
console.log(SortArray(arr));
