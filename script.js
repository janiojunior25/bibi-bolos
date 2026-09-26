function selecionarProduto(nome){

document.getElementById("produto").value = nome;

document.querySelector(".pedido").scrollIntoView({
behavior:"smooth"
});

}



function enviarWhatsapp(){

let produto =
document.getElementById("produto").value;


let sabor =
document.getElementById("sabor").value;


let quantidade =
document.getElementById("quantidade").value;


let nome =
document.getElementById("nome").value;


let endereco =
document.getElementById("endereco").value;



let mensagem = 
`🍰 NOVO PEDIDO - BIBI BOLOS E DOCES

Cliente:
${nome}

Produto:
${produto}

Sabor:
${sabor}

Quantidade:
${quantidade}

Endereço:
${endereco}

Obrigado ❤️`;



let telefone="5569993955202";


let link =
"https://wa.me/"+telefone+
"?text="+
encodeURIComponent(mensagem);



window.open(link,"_blank");

}
