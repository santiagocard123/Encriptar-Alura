const miTextarea = document.getElementById('miTextarea');
const muneco = document.querySelector('.result__img');
const carga = document.getElementById('carga');
const result__text = document.getElementById('result__text');
const result__title = document.getElementById('result__title');
const encriptarBtn = document.getElementById('encriptarBtn');
const desencriptarBtn = document.getElementById('desencriptarBtn');
const copiarBtn = document.getElementById('copiarBtn');

function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        switch (letra) {
            case 'a':
                letra = "ai";
                break;
            case 'e':
                letra = "enter";
                break;
            case 'i':
                letra = "imes";
                break;
            case 'o':
                letra = "ober";
                break;
            case 'u':
                letra = "ufat";
                break;
        }
        mensajeEncriptado += letra;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje.replace(/ai|enter|imes|ober|ufat/g, function(matched) {
        switch (matched) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
        }
    });
    return mensajeDesencriptado;
}

miTextarea.addEventListener("input", (e) => {
    muneco.style.display = "none";
    carga.classList.remove("hidden");
    result__title.textContent = "Capturando mensaje";
    result__text.textContent = "";
});

encriptarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = miTextarea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    result__text.textContent = mensajeEncriptado;
    copiarBtn.classList.remove("hidden");
    result__title.textContent = "El resultado es:";
    carga.classList.add("hidden");
});

desencriptarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = miTextarea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    result__text.textContent = mensajeDesencriptado;
    copiarBtn.classList.remove("hidden");
    result__title.textContent = "El resultado es:";
    carga.classList.add("hidden");
});

copiarBtn.addEventListener("click", () => {
    let textoCopiado = result__text.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        muneco.style.display = "block";
        carga.classList.add("hidden");
        result__title.textContent = "El texto se copió";
    });
});