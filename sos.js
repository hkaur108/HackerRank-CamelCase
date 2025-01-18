function marsExploration(s){
  const sepratedArray=[];
   let comparisonString="SOS";
   let count=0;
  for (let i=0;i<s.length;i=i+3){
     sepratedArray.push(s.slice(i,i+3))
  }
  for(let j=0;j<sepratedArray.length;j++){
   for(let k=0;k<comparisonString.length;k++){
      if(sepratedArray[j][k]!==comparisonString[k]){
         count++
      }
   }
   
  }
  return count;
    
}
let x= marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS')
console.log(x)