
var captar = "";



function chamar() {

    captar = document.getElementById('decodificar').value;

    nova_frase = captar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('digito').innerHTML = nova_frase;
}

function chamar2() {

    captar = document.getElementById('decodificar').value;

    nova_frase = captar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('digito').innerHTML = nova_frase;
}


