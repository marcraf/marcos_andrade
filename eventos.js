


function numero(e)
{
    limpa();
    document.getElementById("score").innerHTML += this.innerHTML;
    this.className = "selected";
}

function limpa() {
    var lmp = document.getElementsByClassName("selected");
    for (x = 0; x < lmp.length; x++) {
        lmp[x].className = "num";
    }
}


function tecla(e) {
    limpa();
    var obj = {49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9, 48: 0};
    var key = parseInt(e.keyCode);

    if ((key > 47) && (key < 59)) {
        document.getElementById("score").innerHTML += obj[key];
        document.getElementById("n" + obj[key]).className = "selected";
    }
}


function init() {
    var objs = document.getElementsByClassName("num");
    for (i = 0; i < objs.length; i++) {
        objs[i].addEventListener("click", numero);
    }



document.addEventListener("keypress",tecla);
}
onload=init;
