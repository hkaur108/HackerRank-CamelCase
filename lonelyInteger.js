function lonelyinteger(a){
    resultObject={};
    finalAnswer=0;
    count=0;
    for (let i=0;i<a.length;i++){
        for (let j=0;j<a.length;j++){
            if(a[i]===a[j]){
                count++;
            }
        }
        resultObject[a[i]]=count;
        count=0;
    }

    for(const property in resultObject){
        if(resultObject[property]=== 1){
            finalAnswer=property;
        }
       
    }
    
    return console.log(finalAnswer)
}

lonelyinteger([1,2,3,4,3,2,1])