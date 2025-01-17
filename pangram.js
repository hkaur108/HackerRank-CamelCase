function pangrams(s){
    let x=s.replaceAll(" ","");
    let stringLowerCase=Array.from(new Set(x.toLowerCase()));
    let m=stringLowerCase.sort().toString();
    let finalStringForMatch=m.replaceAll(",","");
    let stringForMatch='abcdefghijklmnopqrstuvwxyz';
    if(finalStringForMatch===stringForMatch){
        return 'pangram'
    }
    else{
        return "not pangram"
    }
    }
    

let x=pangrams('qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun')
console.log(x)  

 // let count=0;
    // let stringForMatchSeparated=stringForMatch.split("");
    // for(let i=0;i<=stringForMatchSeparated.length;i++){
    //     for(let j=0;j<=stringLowerCase.length;j++){
    //         if(stringForMatchSeparated[i]===stringLowerCase[j]){
    //             count++
    //         }
    //     }
    // }
    // if(count==26){
    //     return "Pangram"
    // }
    // else{
    //     return "not pangram"
    // }