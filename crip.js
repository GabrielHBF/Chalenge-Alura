var texto = document.getElementById("entrada");
var saida = document.getElementById("saida");

var entrada = "";


var textodois="";

var textotres="";

var textoquatro="";

var textocinco="";

var textoseis= "";


function criptografia() {
            document.getElementById("terceiro").style.visibility = 'hidden';
            document.getElementById("secundario").style.visibility = 'visible'
            entrada = texto.value;
           
            textodois = entrada.replace(/i/gi, "ime");
            textotres = textodois.replace(/e/gi, "enter");
            textoquatro = textotres.replace(/a/gi, "ai");
            textocinco = textoquatro.replace(/o/gi, "ober");
            textoseis = textocinco.replace(/u/gi, "ufat");
           return document.getElementById("saida").value = textoseis;

}

function descriptografia() {

    document.getElementById("terceiro").style.visibility = 'hidden';
    document.getElementById("secundario").style.visibility = 'visible'

    entrada = texto.value;
   
    textodois = entrada.replace(/ai/gi, "a");
    textotres = textodois.replace(/enter/gi, "e");
    textoquatro = textotres.replace(/ime/gi, "i");
    textocinco = textoquatro.replace(/ober/gi, "o");
    textoseis = textocinco.replace(/ufat/gi, "u");

   return document.getElementById("saida").value = textoseis;
}


var btnCopia = document.querySelector("#copiar");

btnCopia.addEventListener('click', (e) => {
    navigator.clipboard.writeText(saida.value);
    document.getElementById('saida').value = "";
    document.getElementById('entrada').value ="";
})
