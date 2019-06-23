var mayorNota = document.getElementById("mayor-nota").addEventListener("click",function(){
    calcularMayorNota(curso)
});

var menorNota = document.getElementById("menor-nota").addEventListener("click",function(){
    calcularMenorNota(curso)
});

var promedio = document.getElementById("promedio").addEventListener("click",function(){
    calcularPromedio(curso)
});

var curso = {
    "estudiantes": []
    }

function registrarEstudiante(){
    var codigo = document.getElementById("codigo-input").value;
    var nombre = document.getElementById("nombre-input").value;
    var nota = document.getElementById("nota-input").value;
    if(codigo == "" || nombre == "" || nota == ""){
        alert("Por favor ingrese los datos")
    }else if (isNaN(nota)) {
        alert ("El Formato de la nota NO fue ingresado correctamente");
    }else{
        var estudiante = "{\"codigo\" : \"" + codigo + "\", \"nombre\" : \"" + nombre + "\",\"nota\" :  " + nota + "}";
        var estudianteNuevo = curso.estudiantes.push(JSON.parse(estudiante));
        alert("El estudiante "+ nombre + " fue agregado")
        agregarTabla(codigo, nombre, nota);
    }  
}

function calcularMayorNota(curso){
    title = "Nota más alta";
    var dato = "";
    var i;
    notas = []
    for(i=0;i<curso.estudiantes.length;i++){
     notas.push(curso.estudiantes[i].nota)
    }

    var maximo = Math.max.apply(null , notas);
    
    for(i=0;i<curso.estudiantes.length;i++){
        if(curso.estudiantes[i].nota === maximo){
            dato = "El estudiante de menor nota es: "+ curso.estudiantes[i].nombre +", con un: "+curso.estudiantes[i].nota;
            alert(dato)
        }
    }         
}

function calcularMenorNota(curso){
    title = "Nota más baja";
    var dato;
    var i;
    notas = []
    for(i=0;i<curso.estudiantes.length;i++){
     notas.push(curso.estudiantes[i].nota)
    }
    var minimo = Math.min.apply(null , notas);            
    for(i=0;i<curso.estudiantes.length;i++){
        if(curso.estudiantes[i].nota === minimo){
            dato = "El estudiante de menor nota es: "+ curso.estudiantes[i].nombre +", con un: "+curso.estudiantes[i].nota;
            alert(dato)
        }
    }        
}

function calcularPromedio(json){ 
    title = "Promedio"
    var dato = "";
    var i;
    var promedio = 0.0;
    for(i=0;i<json.estudiantes.length;i++){
       promedio += json.estudiantes[i].nota
    }
    dato = promedio/json.estudiantes.length;

    alert("La nota total promedio es: "+dato)
}

function agregarTabla (codigo, nombre, nota){
    var tabla = document.getElementById("tabla");
    var tr = document.createElement("tr");
    var agregaTr = tabla.appendChild(tr);
    for (i = 0; i<3;i++){
        var td = document.createElement("td"); 
        switch(i){
            case 0:
                agregaTd = agregaTr.appendChild(td).innerHTML = codigo;
            break;
            case 1:
                agregaTd = agregaTr.appendChild(td).innerHTML = nombre;
            break;
            case 2:
                agregaTd = agregaTr.appendChild(td).innerHTML = nota;
            break;
        }
    }
}


