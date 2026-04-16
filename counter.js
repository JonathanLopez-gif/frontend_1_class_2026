let cuenta = 0;

function aumentar() {
    cuenta++;
    actualizarNumero();
}

function disminuir() {
    cuenta--;
    actualizarNumero();
}

function resetear() {
    cuenta = 0;
    actualizarNumero();
}

function actualizarNumero() {
    document.getElementById("numero").innerHTML = cuenta;
    actualizarColor();
}

function actualizarColor() {
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");

    if (cuenta % 10 === 0 && cuenta !== 0) {
        // Color cuando llega a múltiplos de 10
        b1.style.backgroundColor = "red";
        b2.style.backgroundColor = "red";
        b3.style.backgroundColor = "red";
    } else {
        // Color normal
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
    }
}