function dd(arr){
    let ltrDiagonalSum = 0;
    let rtlDiagonalSum = 0;
    const length = arr.length;
    
    for (let i = 0; i < length; i++) {
        ltrDiagonalSum += arr[i][i];
        rtlDiagonalSum += arr[i][length - 1 - i];
    }
    
    return console.log(Math.abs(ltrDiagonalSum - rtlDiagonalSum));
}

dd([[11, 2 ,4],
    [4, 5, 6],
    [10, 8 ,-12]])

