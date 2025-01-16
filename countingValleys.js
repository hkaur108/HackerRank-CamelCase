
function countingValleys(steps, path) {
    const pathArray=path.split("");
    let valleyCount=0;
    let height=0
   for(let i=0;i<steps;i++){
    if(pathArray[i]==='D' && height==0){
        valleyCount++;
    }
        pathArray[i]=="U" ? height+=1 : height-=1;
   }
   return console.log(valleyCount)
}

countingValleys(8,'UDDDUDUU')    