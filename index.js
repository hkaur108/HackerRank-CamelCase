function processData(input){
    const variousInput=input.split("\n");
    let count=0;
    while(count<variousInput.length){
        const arrayOfSplitInput=variousInput[count].split(";");
        const indexesOfCapitalLetter=[];
        let splitWord="";
        let combinedWord="";
    if(arrayOfSplitInput[0]==="S"){
        for(let i=0;i<arrayOfSplitInput[2].length;i++){
            if(arrayOfSplitInput[2][i]===arrayOfSplitInput[2][i].toUpperCase()){
              indexesOfCapitalLetter.push(arrayOfSplitInput[2].indexOf(arrayOfSplitInput[2][i]) ) 
            }
    }
    let startingCharacters=arrayOfSplitInput[2].slice(0,indexesOfCapitalLetter[0])
    for(let i=0;i<indexesOfCapitalLetter.length;i++){
       splitWord+=(arrayOfSplitInput[2].slice(indexesOfCapitalLetter[i],indexesOfCapitalLetter[i+1])).toLowerCase()+" "
    }
        if(arrayOfSplitInput[1]==="V"){
            let VariableString=startingCharacters+" "+splitWord;
            console.log((VariableString).trim());
        }
        else if(arrayOfSplitInput[1]==="C"){
            console.log((splitWord).trim());
        }
        else{
            let methodString=(startingCharacters+" "+splitWord).slice(0,-5);
                console.log((methodString).trim());
        }
    }
    else{
        let remainingWordForMethod="";
        for(let i=0;i<arrayOfSplitInput[2].length;i++){
            if(arrayOfSplitInput[2][i]!==" "){
                combinedWord+=arrayOfSplitInput[2][i];
            }
            else{
                combinedWord+=arrayOfSplitInput[2][i+1].toUpperCase();
                i++;
            }
            remainingWordForMethod=combinedWord;
        }
        
        if(arrayOfSplitInput[1]==="V"){
            console.log((combinedWord.replaceAll(" ","")).trim());
        }
        else if(arrayOfSplitInput[1]==="C"){
            let removedSpace="";
            let remainingLetter=combinedWord.substring(1);
            for(let i=0;i<remainingLetter.length;i++){
                if(remainingLetter[i]===" "){
                    removedSpace+=remainingLetter[i+1].toUpperCase();
                    i++;
                }
                else{
                    removedSpace+=remainingLetter[i];
                }
            }
            let firstLetter= combinedWord[0].toUpperCase();
            combinedWord=firstLetter+removedSpace;
            console.log((combinedWord.replaceAll(" ","")).trim());
        }
        else{
            console.log((remainingWordForMethod.replaceAll(" ","")+"()").trim());
        }
    }
    count++;
    }
   
}   

processData("C;V;can of coke\nS;M;sweatTea()\nS;V;epsonPrinter\nC;M;santa claus\nC;C;mirror");



