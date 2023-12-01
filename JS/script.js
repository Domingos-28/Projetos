/* 

*/
document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS<b/>!";
console.log('Oi isso e console.log')

let a,b,c;
a=5;
b=6;
c=7; 
/*var hora=new Date().getHours(); 
if(hora<12){
    alert("Bom dia");
}
else if(hora<18){
    alert("Boa tarde");
}
else{
    alert("Boa noite");
} */
function verificar(){
    let nome=document.getElementById("nome").value;
    let p=document.getElementById("texto");
    if(nome=="" || nome==null){
         
         p.innerHTML="Campo vazio";
         p.style.color="red";
    }else{
        p.innerHTML="SEJA BEM-VINDO";
        p.style.color="green";
    }
}
function verificacor(){
    let cor=document.getElementById("nome").value;
    cor=cor.toLowerCase();
    switch(cor){
        case "azul":
            document.body.style.backgroundColor="blue";
            break;
        case "vermelha":
            document.body.style.backgroundColor="red";
            break;
        case "amarela":
            document.body.style.backgroundColor="yellow";
            break;
        default:
            document.getElementById("texto").innerHTML="Cor nao encontrada";
    }
}