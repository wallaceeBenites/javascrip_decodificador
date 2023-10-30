var palavra_para_decodificar = document.querySelector("#decodificar");
var botao_para_decodificar = document.querySelector("#decodificador_conteudo_formulario_botao_criptografar");
var botao_para_descriptografar = document.querySelector("#decodificador_conteudo_formulario_botao_descriptografar");

function criptografar(){
    var nova_frase1 = palavra_para_decodificar.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    alert(nova_frase1);
    document.getElementById("decodificador_resultado_decodificado").innerHTML = nova_frase1;
}
botao_para_decodificar.onclick = criptografar;

function descriptografar(){
    var nova_frase2 = palavra_para_decodificar.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    alert(nova_frase2);
}
botao_para_descriptografar.onclick = descriptografar;


 



    