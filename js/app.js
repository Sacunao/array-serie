window.addEventListener("load", function() {
    var boton = document.getElementById("mostrar");
    boton.addEventListener("click", function() {
        var numero = parseInt(document.getElementById("numero").value);
        resultado(numero);
    });

        function resultado(numero){
            var arreglo = [];
                for(var i = 1;  i <= numero; i++){
                    arreglo.push(i);
                };
        	document.getElementById("resultado").innerHTML = arreglo.join("<br>");
        }
});