let pontos = 100
let anos = 2
let categoria;
if(pontos >=1000 && anos >1){
    console.log("diamante")
}else if ("pontos >=500"){
    console.log("ouro")
}else if (pontos >=100){
    console.log("prata")
}else {
    console.log("bronze")
}
for (let i = 50; i >= 1; i--){
    console.log(i);
}
// 1, 2, 3, 4, 5,

let tentativas = 10;
while (tentativas > 0){
    console.log(`restam ${tentativas}`); tentativas--;
}
for( let i = 1; i<= 10; i++){
    if( i === 7) break;
    if(i % 2 === 0 ) continue;
    console.log(i); //1. 3, 5, 
}

for (let i = 10; i >= 1; i--){
    console.log(i * 5)}