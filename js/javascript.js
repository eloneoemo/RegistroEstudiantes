// variables de estudiantes
var estudianteAgregado = {}, estudiantes = []; 
// registrar estudiantes
function registrarEstudiante(){
    var codigo = document.getElementById("codigo-input").value;
    var nombre = document.getElementById("nombre-input").value;
    var nota = document.getElementById("nota-input").value;

//agregando al objeto
    estudianteAgregado.codigo = codigo;
    estudianteAgregado.nombre = nombre;
    estudianteAgregado.nota = parseInt(nota);
    estudiantes.push ({estudiante: estudianteAgregado})
    agregarTabla(codigo, nombre, nota);
}

// agregando a la tabla
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

/// aniadido **************************

function calcularPromedio(json){
    console.log(json);
    title = "Promedio"
    var dato = "";
    var i;
    var promedio = 0.0;
    for(i=0;i<json.length;i++){
       promedio += json[i].estudianteAgregado.nota
       console.log(promedio)
    }
    dato = promedio/json.length;
    console.log(dato)       
}
function mostrarPromedio(){
    calcularPromedio(estudiantes);
}
/*
function calcularMayorNota(json){
    title = "Nota más alta";
    var dato = "";
    var i;
    notas = []
    for(i=0;i<json.length;i++){
     notas.push(json[i].nota)
    }
    var maximo = Math.max.apply(null , notas);
    for(i=0;i<json.length;i++){
        if(json[i].nota === maximo){
            dato += "<tr><td>"+json[i].codigo+"</td><td>"+json[i].nombre+"</td><td>"+json[i].nota+"</td></tr>";
        }
        tabular(title,dato)
    }                
}
function calcularMenorNota(json){
    title = "Nota más baja";
    var dato = "";
    var i;
    notas = []
    for(i=0;i<json.length;i++){
     notas.push(json[i].nota)
    }
    var minimo = Math.min.apply(null , notas);            
    for(i=0;i<json.length;i++){
        if(json[i].nota === minimo){
            dato += "<tr><td>"+json[i].codigo+"</td><td>"+json[i].nombre+"</td><td>"+json[i].nota+"</td></tr>";
        }
        tabular(title, dato)
    }        
}
function tabular(title,info) {
    if(title ==="Promedio"){
        var plantilla = "<table><caption><h3>"+title+"</h3></caption><tr><th>Nota Promedio</th></tr><tr><td>"+info+"</td></tr></table>"
    }else{
        var plantilla = "<table><caption><h3>"+title+"</h3></caption><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr>"+info+"</table>"
    }
    document.getElementById("tabla").innerHTML = plantilla
}
function colocarDatos(){
     leerDatos(estudiantes);
}
function mostrarPromedio(){
    calcularPromedio(estudiantes);
}
function mostrarMayorNota(){
    calcularMayorNota(estudiantes)
}
function mostrarMenorNota(){
    calcularMenorNota(estudiantes)
}*/