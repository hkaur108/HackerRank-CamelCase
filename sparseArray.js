   function matchingStrings(strings,queries){
        let resultObject={};
        let count=0;
        let results=[];
        
        console.log(queries.length);
        console.log(strings.length)
        for(let i=0;i<queries.length;i++){
            for(let j=0;j<strings.length;j++){
                if(queries[i]===strings[j]){
                    count++;
                    
                }
            }
            results.push(count);
           
            count=0;
        }
        return console.log(results);
   }


 matchingStrings(['lekgdisnsbfdzpqlkg',
    'eagemhdygyv',
    'jwvwwnrhuai',
    'urcadmrwlqe',
    'mpgqsvxrijpombyv',
    'mpgqsvxrijpombyv',
    'urcadmrwlqe',
    'mpgqsvxrijpombyv',
    'eagemhdygyv',
    'eagemhdygyv',
    'jwvwwnrhuai',
    'urcadmrwlqe',
    'jwvwwnrhuai',
    'kvugevicpsdf',
    'kvugevicpsdf',
    'mpgqsvxrijpombyv',
    'urcadmrwlqe',
    'mpgqsvxrijpombyv',
    'exdafbnobg',
    'qhootohpnfvbl',
    'suffrbmqgnln',
    'exdafbnobg',
    'exdafbnobg',
    'eagemhdygyv',
    'mpgqsvxrijpombyv',
    'urcadmrwlqe',
    'jwvwwnrhuai',
    'lekgdisnsbfdzpqlkg',
    'mpgqsvxrijpombyv',
    'lekgdisnsbfdzpqlkg',
    'jwvwwnrhuai',
    'exdafbnobg',
    'mpgqsvxrijpombyv',
    'kvugevicpsdf',
    'qhootohpnfvbl',
    'urcadmrwlqe',
    'kvugevicpsdf',
    'mpgqsvxrijpombyv',
    'lekgdisnsbfdzpqlkg',
    'mpgqsvxrijpombyv',
    'kvugevicpsdf',
    'qhootohpnfvbl',
    'lxyqetmgdbmh',
    'urcadmrwlqe',
    'urcadmrwlqe',
    'kvugevicpsdf',
    'lxyqetmgdbmh',
    'urcadmrwlqe',
    'lxyqetmgdbmh',
    'jwvwwnrhuai',
    'qhootohpnfvbl',
    'qhootohpnfvbl',
    'jwvwwnrhuai',
    'lekgdisnsbfdzpqlkg',
    'kvugevicpsdf',
    'mpgqsvxrijpombyv',
    'exdafbnobg',
    'kvugevicpsdf',
    'lekgdisnsbfdzpqlkg',
    'qhootohpnfvbl',
    'exdafbnobg',
    'qhootohpnfvbl',
    'exdafbnobg',
    'mpgqsvxrijpombyv',
    'suffrbmqgnln',
    'mpgqsvxrijpombyv',
    'qhootohpnfvbl',
    'jwvwwnrhuai',
    'mpgqsvxrijpombyv',
    'qhootohpnfvbl',
    'lekgdisnsbfdzpqlkg',
    'eagemhdygyv',
    'jwvwwnrhuai',
    'kvugevicpsdf',
    'eagemhdygyv',
    'eagemhdygyv',
    'lxyqetmgdbmh',
    'qhootohpnfvbl',
    'lxyqetmgdbmh',
    'exdafbnobg',
    'qhootohpnfvbl',
    'qhootohpnfvbl',
    'exdafbnobg',
    'suffrbmqgnln',
    'mpgqsvxrijpombyv',
    'urcadmrwlqe',
    'eagemhdygyv',
    'lxyqetmgdbmh',
    'urcadmrwlqe',
    'suffrbmqgnln',
    'qhootohpnfvbl',
    'kvugevicpsdf',
    'lekgdisnsbfdzpqlkg',
    'lxyqetmgdbmh',
    'mpgqsvxrijpombyv',
    'jwvwwnrhuai',
    'lxyqetmgdbmh',
    'lxyqetmgdbmh',
    'lekgdisnsbfdzpqlkg',
    'qhootohpnfvbl'],[
'exdafbnobg',
'eagemhdygyv',
'mpgqsvxrijpombyv',
'kvugevicpsdf',
'lekgdisnsbfdzpqlkg',
'kvugevicpsdf',
'exdafbnobg',
'qhootohpnfvbl',
'eagemhdygyv',
'kvugevicpsdf',
'suffrbmqgnln',
'jwvwwnrhuai',
'lekgdisnsbfdzpqlkg',
'lekgdisnsbfdzpqlkg',
'mpgqsvxrijpombyv',
'jwvwwnrhuai',
'kvugevicpsdf',
'lekgdisnsbfdzpqlkg',
'exdafbnobg',
'suffrbmqgnln',
'qhootohpnfvbl',
'eagemhdygyv',
'exdafbnobg',
'suffrbmqgnln',
'jwvwwnrhuai',
'qhootohpnfvbl',
'eagemhdygyv',
'exdafbnobg',
'exdafbnobg',
'jwvwwnrhuai',
'qhootohpnfvbl',
'lxyqetmgdbmh',
'qhootohpnfvbl',
'suffrbmqgnln',
'lxyqetmgdbmh',
'qhootohpnfvbl',
'eagemhdygyv',
'jwvwwnrhuai',
'eagemhdygyv',
'qhootohpnfvbl',
'mpgqsvxrijpombyv',
'qhootohpnfvbl',
'jwvwwnrhuai',
'exdafbnobg',
'eagemhdygyv',
'eagemhdygyv',
'kvugevicpsdf',
'kvugevicpsdf',
'jwvwwnrhuai',
'urcadmrwlqe',
'lxyqetmgdbmh',
'qhootohpnfvbl',
'exdafbnobg',
'exdafbnobg',
'eagemhdygyv',
'qhootohpnfvbl',
'exdafbnobg',
'exdafbnobg',
'lekgdisnsbfdzpqlkg',
'jwvwwnrhuai',
'eagemhdygyv',
'urcadmrwlqe',
'kvugevicpsdf',
'lekgdisnsbfdzpqlkg',
'jwvwwnrhuai',
'eagemhdygyv',
'lekgdisnsbfdzpqlkg',
'exdafbnobg',
'kvugevicpsdf',
'jwvwwnrhuai',
'exdafbnobg',
'lxyqetmgdbmh',
'exdafbnobg',
'lxyqetmgdbmh',
'jwvwwnrhuai',
'mpgqsvxrijpombyv',
'eagemhdygyv',
'urcadmrwlqe',
'kvugevicpsdf',
'qhootohpnfvbl',
'jwvwwnrhuai',
'eagemhdygyv',
'urcadmrwlqe',
'urcadmrwlqe',
'exdafbnobg',
'qhootohpnfvbl',
'exdafbnobg',
'eagemhdygyv',
'exdafbnobg',
'jwvwwnrhuai',
'eagemhdygyv',
'jwvwwnrhuai',
'mpgqsvxrijpombyv',
'urcadmrwlqe',
'urcadmrwlqe',
'eagemhdygyv',
'eagemhdygyv',
'jwvwwnrhuai',
'suffrbmqgnln',
'eagemhdygyv',
])  

//    4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

// 3
// def
// de
// fgh
// 3
// de
// lmn
// fgh
