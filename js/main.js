
//CLASES 

class Biblioteca {

    constructor() { this.libro = []; }

    totalLibro() { return this.libro.length; }

    generarId() {
        let maximo = 0;

        this.libro.forEach(item => {
            if (item.id > maximo) {
                maximo = item.id;
            }
        });
        return maximo + 1;
    }

    agregarLibro(nombreLibro, autorLibro, anioLibro) {
        this.libro.push({id:this.generarId(), nombre:nombreLibro.toLocaleUpperCase(), autor:autorLibro.toLocaleUpperCase(), anio: anioLibro});
        console.log("Agregaste un Libro!");
    }

    retirarLibro(id) {
        this.libro = this.libro.filter(item => item.id != id);
        console.log("Retiraste un Libro!");
    }

    listaLibros() {
        let cont = "******* LISTA DE LIBROS *******\n";

        this.libro.forEach(item => {
            cont += `${item.id} - ${item.nombre} de ${item.autor} - ${item.anio} \n` 
        });

        return cont;
    }
}

//PROG PRINCIPAL

let nombre = "";
let autor;
let anio;

const biblioteca = new Biblioteca();

alert("S I S T E M A  B I B L I O T E C A 😎");

// Ingresamos Libros

while (nombre.toLocaleUpperCase() != "S") {
    nombre = prompt("NOMBRE del Libro \nEscriba S para salir: ");
    
    if (nombre.toLocaleUpperCase() == "S") {
        break;
    }
    
    autor = prompt("AUTOR del Libro");
    anio = parseInt(prompt("AÑO del Libro "));
    biblioteca.agregarLibro(nombre, autor, anio);
}

// Ver si hay Libros en la Biblioteca
if (biblioteca.totalLibro() > 0) {
    let id;

    // Retirar Libro atraves del su codigo (ID)
    id = parseInt(prompt(biblioteca.listaLibros() + "\nIngrese el cód. (ID) del Libro a retirar: \nEscriba 0 para salir: "));
    while (id != 0) {
        
        if (id > 0) {
            biblioteca.retirarLibro(id);
        } else {
            alert("No existe libro con ID: " + id);
        }

        if(biblioteca.totalLibro() == 0){ break; }

        id = parseInt(prompt(biblioteca.listaLibros() + "\nIngrese el cód. (ID) del Libro a retirar: \nEscriba 0 para salir: "));
    }
}

// Informe 
if(biblioteca.totalLibro() <= 0) {
    alert("No hay Libros en la Biblioteca!");
} else {
    //Mostrar los Libros que quedaron en Biblioteca 
    alert("LISTADO DE LIBROS ACTUALIZADO");
    alert(`${biblioteca.listaLibros()}`);
}