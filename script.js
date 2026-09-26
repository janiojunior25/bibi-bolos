function selecionarProduto(nome){

let produto = document.getElementById("produto");

produto.value = nome;


// atualiza os sabores automaticamente
atualizarSabores();


document.querySelector(".pedido").scrollIntoView({

behavior:"smooth"

});

}





function atualizarSabores(){


let produto = document.getElementById("produto").value;


let sabor = document.getElementById("sabor");



sabor.innerHTML = "";



let sabores = [];



if(produto == "Bolo Pequeno" || produto == "Bolo Grande"){


sabores = [

"Chocolate",

"Ninho",

"Prestígio",

"Maracujá"

];

}





if(produto == "Brigadeiro Linha Clássica"){


sabores = [

"Chocolate",

"Ninho",

"Beijinho",

"Coco Queimado",

"Meio Amargo",

"Chocolate Branco"

];

}





if(produto == "Brigadeiro Linha Especial"){


sabores = [

"Prestígio",

"Limão",

"Laranja",

"Cenoura com Chocolate"

];

}





if(produto == "Brigadeiro Linha Suprema"){


sabores = [

"Ferrero Rocher",

"Oreo",

"Nutella",

"Paçoca",

"Morango"

];

}





sabores.forEach(function(item){


let opcao = document.createElement("option");


opcao.textContent = item;


opcao.value = item;


sabor.appendChild(opcao);


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
