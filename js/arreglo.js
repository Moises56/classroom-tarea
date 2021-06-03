var classroom = [
    {
        instructor: [
            {
                nombre: "Goku",
                correo: "goku@gmail.com",
                imagen: "goku.jpg",
            }
            // {
            //     nombre: "kami",
            //     correo: "kami@gmail.com",
            //     imagen: "kami.jpg",
            // },
            // {
            //     nombre: "shenlong",
            //     correo: "shenlong@gmail.com",
            //     imagen: "shenlong.jpg",
            // },
           
        ],
        clases: [{
                nombreClase: "Programación II",
                codigo: "CSD33XZ",
                seccion: "1300",
                imgFondo: "detalle3.png",
                imgFondoDetalle: "detalle1.png",
                aula: "B-12",
                descripcion: "Clase donde se enseña a programar",
                participantes: [
                    {
                        nombre: "Krillin",
                        correo: "krillin@gmail.com",
                        imagen: "krillin.jpg",
                    },
                    {
                        nombre: "goten",
                        correo: "goten@gmail.com",
                        imagen: "goten.jpg",
                    },
                    {
                        nombre: "pan",
                        correo: "pan@gmail.com",
                        imagen: "pan.jpg",
                    },
                    // ...Otro participante
                ],
                anuncios: [
                    {
                        mensaje: "Hoy es el examen",
                        fecha: "27/02/2020",
                        hora: "12:10 AM"
                    },
                    {
                        mensaje: "Hoy entrega de proyecto",
                        fecha: "27/03/2020",
                        hora: "11:59 PM"
                    },
                    
                    // ...Otro anuncio
                ],
                asignaciones: [
                    {
                        titulo: "Tarea 1",
                        descripcion: "Entregar un programa",
                        fecha: "28/02/2020",
                    },
                    
                    // ...Otra asignación
                ],
            },
            //TODO...Otra clase
            {
                nombreClase: "POO",
                codigo: "CSD33XY",
                seccion: "1400",
                imgFondo: "detalle2.png",
                imgFondoDetalle: "detalle1.png",
                aula: "B-11",
                descripcion: "Progrmacion orientada a objetos",
                participantes: [{
                        nombre: "vegeta",
                        correo: "vegeta@gmail.com",
                        imagen: "vegeta.jpg",
                    },
                    // ...Otro participante
                ],
                anuncios: [{
                        mensaje: "Hoy es la tarea2",
                        fecha: "28/02/2020",
                        hora: "12:10 PM"
                    },
                    // ...Otro anuncio
                ],
                asignaciones: [{
                        titulo: "Tarea 2",
                        descripcion: "Entregar Tarea",
                        fecha: "29/02/2020",
                    },
                    // ...Otra asignación
                ],
            },
            {
                nombreClase: "Ecuaciones Diferenciales",
                codigo: "MAT55XY",
                seccion: "1100",
                imgFondo: "detalle2.png",
                imgFondoDetalle: "detalle1.png",
                aula: "B-10",
                descripcion: "Matematicas avanzadas",
                participantes: [{
                        nombre: "majinboo",
                        correo: "majinboo@gmail.com",
                        imagen: "majinboo.jpg",
                    },
                    // ...Otro participante
                ],
                anuncios: [{
                        mensaje: "Entrega de Las Ecuaciones",
                        fecha: "25/03/2020",
                        hora: "3:45 PM"
                    },
                    // ...Otro anuncio
                ],
                asignaciones: [{
                        titulo: "Tarea de Ecuaciones",
                        descripcion: "Ecuaciones Cuadraticas de Segundo Orden",
                        fecha: "29/03/2020",
                    },
                    // ...Otra asignación
                ],
            }
        ],
    }

]

//? LocalStorage
//console.log('classroom:', classroom);

var localStorage = window.localStorage;
var indiceSelecionado = '';

if (localStorage.getItem(classroom) == null) {
    localStorage.setItem('classroom', JSON.stringify(classroom));
} else {
    classroom = JSON.parse(localStorage.getItem('classroom'))
}