function gradingStudents(grades){
    let resultsArray=[];
    for(let i=0;i<grades.length;i++){
        if(grades[i]<38){
            resultsArray.push(grades[i]);
        }
        else{
            for(let j=0;j<5;j++){
                let nextNum=grades[i]+j;
                if(nextNum%5==0){
                    if((nextNum-grades[i])<3){
                        resultsArray.push(nextNum);
                    }
                    else{
                        resultsArray.push(grades[i])
                    }
                }
            }
        }
    }
    return console.log(resultsArray)
}

gradingStudents([37,38])

