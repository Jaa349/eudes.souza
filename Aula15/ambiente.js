let num = [4,2,3,5,7,6]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor é o ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não foi encontrdo')
}else{
    console.log(`O valor esta na posição ${pos}`)
}


