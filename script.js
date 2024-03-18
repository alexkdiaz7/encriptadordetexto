function encriptarTexto() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.trim().length !== 0) { 
        document.getElementById("mensaje").value = textoCifrado; 
        tituloMensaje.textContent = "Texto encriptado con éxito"; 
        parrafo.textContent = ""; 
        muñeco.src = "descarga.jpg"; 
    } else {
        muñeco.src = "encriptar.jpg"; 
        alert("Debes ingresar algún texto.");
    }
}
function desencriptartexto() {
    let textoEncriptado = document.getElementById("mensaje").value.trim();
    let textoOriginal = document.getElementById("texto").value.trim(); 
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (textoEncriptado || textoOriginal !== textoEncriptado) {
        let textoDesencriptado = textoEncriptado
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        document.getElementById("texto").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "buscando.jpg";
    } else {
        muñeco.src = "encriptar.jpg";
        alert("No hay texto encriptado para desencriptar.");
    }
}
function validarTexto() {
    let texto = document.getElementById("texto").value;
    let letrasPermitidas = /^[a-z\s]+$/i; 

    if (!letrasPermitidas.test(texto)) {
        alert("El texto solo puede contener letras minúsculas y espacios, sin acentos.");
        document.getElementById("texto").value = ''; 
    }
}
function copiarTexto() {
    let textarea = document.getElementById("mensaje");
    textarea.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("El texto ha sido copiado al portapapeles.");
}
