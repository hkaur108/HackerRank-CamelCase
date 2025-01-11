// 

function flippingBits(n) {
    let splitBinary = n.toString(2).split("");
    let base2 = new Uint32Array(32);
   
    const sbLength = splitBinary.length;
    
    for (let i = 0; i < 32; i++) {
        const sbIndexInverse = 32 - i;
        if (sbIndexInverse <= sbLength) {
            base2[i] = Number(splitBinary[sbLength - sbIndexInverse])
        }
        base2[i] = base2[i] === 0 ? 1 : 0;
    }

    return parseInt(base2.join(""), 2);
}

console.log(flippingBits(5))