function Saludar() {
    let nombre = prompt("ingresa tu nombre");
    return console.log("bienvenido " + nombre)
}

Saludar();

function DolarOficial(){
    let input1 = document.getElementById("input1");
    let boton1 = document.getElementById("boton1")
    let contenedor = document.getElementById("divOficial");
    boton1.addEventListener("click", () => {
        if (input1.value === "") {
            alert("ingresa un numero valido");
        } else {
            let resultado = input1.value * 1255;
        console.log(resultado);
        let parrafo = document.createElement("p");
    parrafo.innerHTML = "el resultado es " + resultado;
    contenedor.appendChild(parrafo);
        }
    });
    
}

DolarOficial();

function DolarBlue(){
    let input2 = document.getElementById("input2");
    let boton2 = document.getElementById("boton2");
    let contenedor = document.getElementById("divBlue");
    boton2.addEventListener("click", () => {
        let resultado = input2.value * 1310;
        console.log(resultado);
        let parrafo = document.createElement("p");
    parrafo.innerHTML = "el resultado es " + resultado;
    contenedor.appendChild(parrafo);
    });
}
DolarBlue();

function DolarMep(){
    let input3 = document.getElementById("input3");
    let boton3 = document.getElementById("boton3");
    let contenedor = document.getElementById("divMep");
    boton3.addEventListener("click", () => {
        let resultado = input3.value * 1260;
        console.log(resultado);
        let parrafo = document.createElement("p");
    parrafo.innerHTML = "el resultado es " + resultado;
    contenedor.appendChild(parrafo);
    })
}

DolarMep();

function DolarCcl(){
    let input4 = document.getElementById("input4");
    let boton4 = document.getElementById("boton4");
    let contenedor = document.getElementById("divCcl");
    boton4.addEventListener("click", () => {
        let resultado = input4.value * 1263;
        console.log(resultado);
        let parrafo = document.createElement("p");
    parrafo.innerHTML = "el resultado es " + resultado;
    contenedor.appendChild(parrafo);
    });
}

DolarCcl();

function DolarTarjeta(){
    let input5 = document.getElementById("input5");
    let boton5 = document.getElementById("boton5");
    let contenedor = document.getElementById("divTarjeta");
    boton5.addEventListener("click", () => {
        let resultado = input5.value * 1668;
        console.log(resultado);
        let parrafo = document.createElement("p");
    parrafo.innerHTML = "el resultado es " + resultado;
    contenedor.appendChild(parrafo);
    });
}
DolarTarjeta();

function DolarMayorista(){
    let input6 = document.getElementById("input6");
    let boton6 = document.getElementById("boton6");
    let contenedor = document.getElementById("divMayorista");
    boton6.addEventListener("click", () => {
        let resultado = input6.value * 1258;
        console.log(resultado);
        let parrafo = document.createElement("p");
    parrafo.innerHTML = "el resultado es " + resultado;
    contenedor.appendChild(parrafo);
    });
}
DolarMayorista();