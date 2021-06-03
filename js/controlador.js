//* Abrir sidebar
// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  // console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  // console.log(document.getElementById('sidebar'))
});

//*Estructura de JSON

var classroom = 
 [
   {//*instructor 1
    instructor: 
            {
              nombre: "Goku",
              correo: "goku@gmail.com",
              imagen: "goku.jpg",
            },
    clases: [
      { //*clase 1
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
                        // ...Otro participante
        ],
        anuncios: [
                {
                  mensaje: "Hoy es el examen",
                  fecha: "27/02/2020",
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
      //*Clase 2
      {
        nombreClase: "POO",
        codigo: "POO33XZ",
        seccion: "1400",
        imgFondo: "detalle2.png",
        imgFondoDetalle: "detalle1.png",
        aula: "B-12",
        descripcion: "Clase donde se enseña a programar bien",
        participantes: [
                        {
                        nombre: "Gohan",
                        correo: "gohan@gmail.com",
                        imagen: "gohan.jpg",
                        },
                        // ...Otro participante
        ],
        anuncios: [
                {
                  mensaje: "Hoy es la tarea",
                  fecha: "01/06/2021",
                },
                  // ...Otro anuncio
        ],
        asignaciones: [
                  {
                    titulo: "Prueba 1",
                    descripcion: "Entregar un programa bien",
                    fecha: "31/05/2021",
                  },
                    // ...Otra asignación
        ],
      },
      { //*clase 3
        nombreClase: "Diseño Web",
        codigo: "DIS33XZ",
        seccion: "1600",
        imgFondo: "detalle3.png",
        imgFondoDetalle: "detalle1.png",
        aula: "B-12",
        descripcion: "Clase donde se enseña a programar Web",
        participantes: [
                        {
                        nombre: "Puar",
                        correo: "puar@gmail.com",
                        imagen: "puar.jpg",
                        },
                        // ...Otro participante
        ],
        anuncios: [
                {
                  mensaje: "Hoy es el Proyecto",
                  fecha: "27/06/2021",
                },
                  // ...Otro anuncio
        ],
        asignaciones: [
                  {
                    titulo: "Proyecto 1",
                    descripcion: "Entregar un programa web",
                    fecha: "15/06/2021",
                  },
                    // ...Otra asignación
        ],
      },

       //...Otra clase
    ],
},
{
  //*instructor 2
  instructor: 
  {
    nombre: "Vegeta",
    correo: "vegeta@gmail.com",
    imagen: "vegeta.jpg",
  },
clases: [
    { //*clase 1
      nombreClase: "Programación I",
      codigo: "CSD33XZ",
      seccion: "1300",
      imgFondo: "detalle3.png",
      imgFondoDetalle: "detalle1.png",
      aula: "B-12",
      descripcion: "Clase donde se enseña a programar",
      participantes: [
                      {
                      nombre: "Patricio",
                      correo: "patricio@gmail.com",
                      imagen: "patricio.jpg",
                      },
                      // ...Otro participante
      ],
      anuncios: [
              {
                mensaje: "Hoy es el examen",
                fecha: "27/02/2020",
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
    //*Clase 2
    {
      nombreClase: "POO 2",
      codigo: "POO33XZ",
      seccion: "1400",
      imgFondo: "detalle2.png",
      imgFondoDetalle: "detalle1.png",
      aula: "B-12",
      descripcion: "Clase donde se enseña a programar bien",
      participantes: [
                      {
                      nombre: "Pan",
                      correo: "pan@gmail.com",
                      imagen: "pan.jpg",
                      },
                      // ...Otro participante
      ],
      anuncios: [
              {
                mensaje: "Hoy es la tarea",
                fecha: "01/06/2021",
              },
                // ...Otro anuncio
      ],
      asignaciones: [
                {
                  titulo: "Prueba 1",
                  descripcion: "Entregar un programa bien",
                  fecha: "31/05/2021",
                },
                  // ...Otra asignación
      ],
    },
    { //*clase 3
      nombreClase: "Diseño Web 2",
      codigo: "DIS33XZ",
      seccion: "1600",
      imgFondo: "detalle3.png",
      imgFondoDetalle: "detalle1.png",
      aula: "B-12",
      descripcion: "Clase donde se enseña a programar Web",
      participantes: [
                      {
                      nombre: "Uub",
                      correo: "uub@gmail.com",
                      imagen: "uub.jpg",
                      },
                      // ...Otro participante
      ],
      anuncios: [
              {
                mensaje: "Hoy es el Proyecto",
                fecha: "27/06/2021",
              },
                // ...Otro anuncio
      ],
      asignaciones: [
                {
                  titulo: "Proyecto 1",
                  descripcion: "Entregar un programa web",
                  fecha: "15/06/2021",
                },
                  // ...Otra asignación
      ],
    },

     //...Otra clase
  ],
}
 ]


localStorage = window.localStorage
var indiceSelect = null

if (localStorage.getItem(classroom)==null) {
  localStorage.setItem("classroom", JSON.stringify(classroom));
} else {
  classroom = JSON.parse(localStorage.getItem('classroom'))
}


//* generar instructores

function generarInstructores(){
  document.getElementById('add-instructor').innerHTML = '';
  document.getElementById("clases2-nav").innerHTML = ''; 
  // console.log('instructores',classroom);
  classroom.forEach(function(inst,i){
    // console.log(inst.instructor.nombre);
      nome = inst.instructor.nombre
      correo = inst.instructor.correo
      img = inst.instructor.imagen
      // for (const i in instruc) {
        // console.log(instruc[i].nombre);

        // document.getElementById("img-perfil").innerHTML = 
        // `
        // <img class="circular--square fa-users btn-sm card-img2" src="/img/profile-pics/${img}" />
        // ` 

        // document.getElementById("ventana-clases").innerHTML = `
        // <a class="nav-link link1 active" aria-current="page" href="#" generarClases(${i})>Clase</a>
        // ` 
        
        document.getElementById("clases2-nav").innerHTML += 
        `<p onclick="generarClases(${i})"></i>Instructor ${nome}</p>`

         document.getElementById('add-instructor').innerHTML +=
         `<div class="col-md-4">
           <img onclick=" generarClases(${i})" class="circular--square card-img" src="/img/profile-pics/${img}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
               <h5 class="card-title">${nome}</h5>
               <h6 class="card-subtitle mb-2 text-muted">${correo}</h6>   
            </div>
          </div>
         `
      // }
       
    });


}

//*Agregar un instructor
function addInstructor(){
  console.log('Nuevo instructor');
}

//*Poblar el selec
manager = ['androide_16.jpg','androide_18.jpg','androide_19.jpg','baby.jpg','bulma.jpg','kibito.jpg','picoro.jpg',
          'roshi.jpg','kami.jpg','dende.jpg','mr_satan.jpg','cell.jpg','freezer','goku.jpg','vegeta.jpg'] 

for (let i = 0; i <manager.length; i++) {
  // console.log(manager[i]);
   document.getElementById('list-inst').innerHTML += 
   `<option value="${manager[i]}">${manager[i]}</option>`
}

//*Nuevo Instructor
function newInstructor(){
  nombre = document.getElementById('nombre-inst').value;
  correo = document.getElementById('correo-inst').value;
  list = document.getElementById('list-inst').value;
    
  inst = classroom.instructor
     instr = {
          instructor: {
            nombre: nombre,
            correo: correo,
            imagen: list
          }
        }
     classroom.push(instr)
     localStorage.setItem("classroom", JSON.stringify(classroom));
     alert('Instructor add successfull')

}


//*generar clases
function  generarClases(i) {
  indiceSelect = i
  
   console.log(indiceSelect);
  document.getElementById('todalas-clases').innerHTML = '';
  document.getElementById('clases-nav').innerHTML = '';
  // console.log(classroom[i].clases);
  clasInst = classroom[i].clases
  console.log(clasInst);

  clasInst.forEach(function(clase, d){
        // console.log(clase.asignaciones);
     clas = clase.asignaciones
     nombreClase = clase.nombreClase
    // console.log(nombreClase);
  
     document.getElementById("clases-nav").innerHTML += 
        `
        <li>${nombreClase}</li>
        `
     imgFondo = clase.imgFondo
     seccion = clase.seccion
    // console.log(nombreClase);
     for (const c in clas) {
       titulo = clas[c].titulo
       fecha = clas[c].fecha
      //  console.log(titulo);
          
            document.getElementById('todalas-clases').innerHTML += 
            `
            <div class="col-12 col-sm-6 col-md-6 col-xl-3">
              <div class="card card-class">
                  <img onclick="detalleClases(${d})"  src="/img/ventanas/${imgFondo}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title nombre-class">${nombreClase}</h5>
                    <p class="card-text seccion-class">${seccion}.</p>
                  </div>
                  <div class="card-body">
                      <p>${fecha}</p>
                      <p>${titulo}</p>
                  </div>
                  <div class="card-body list-group-item ico-targeta ">
                    <a href="#" class="ico-color ml-1"><i class="fas fa-chart-line"></i></a>
                    <a href="#" class="ico-color ml-1"><i class="far fa-folder"></i></a>
                  </div>
                </div>
             </div>
            ` 
     }
    
   });
}
// generarClases();


function detalleClases(d){
  console.log('instructor', indiceSelect);
  i =indiceSelect
// console.log(classroom.instructor);

   z=i;
  //  console.log(app.clases[d]);
  if(z==i){
    nombreClase=classroom[z].clases[d].nombreClase
    seccion=classroom[z].clases[d].seccion
    codigo=classroom[z].clases[d].codigo
    descripcion=classroom[z].clases[d].descripcion
    aula=classroom[z].clases[d].aula
    imgFondoDetalle=classroom[z].clases[d].imgFondoDetalle
    instructor = classroom[z].instructor.nombre
    img = classroom[z].instructor.imagen
    //  console.log(classroom[z].instructor.nombre);

    asignaciones = classroom[z].clases[d].asignaciones
    anuncios = classroom[z].clases[d].anuncios
    for (let a = 0; a < asignaciones.length; a++) {
      titulo = asignaciones[a].titulo
      fecha = asignaciones[a].fecha
      descripcion = asignaciones[a].descripcion
      
      console.log(asignaciones[a].titulo);

      for (let n = 0; n < anuncios.length; n++) {
        msj = anuncios[n].mensaje
        hora = anuncios[n].hora
        // console.log(anuncios[n].mensaje);   
        
        document.getElementById('todalas-clases').innerHTML =
        `
        <ul class="nav justify-content-center">
        <li class="nav-item " >
          <a class="nav-link link0 disabled" href="#" tabindex="-1" aria-disabled="true">
            <p class="nomDetalle-nav1">${nombreClase}</p>
            <p class="nomDetalle-nav2">${seccion}</p>
          </a>
        </li>
        <li class="nav-item" id="ventana-clases">
          <a class="nav-link link1 active" aria-current="page" href="#" onclick="generarClases(${i})">Clase</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link2" href="#" onclick="ventanaAsignaciones()">Asignaciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link3" href="#" onclick="ventanaParticipantes()">Participantes</a>
        </li>
      </ul>
      
      <div class="card card-detalle1">
        <img src="/img/ventanas/${imgFondoDetalle}" class="card-img-top" alt="...">
        <div class="card-body">
          <!-- <div class="card-body"> -->
            <h5 class="card-title nombre-detalle">${nombreClase}</h5>
            <p class="card-text seccion-detalle">${seccion}.</p>
            <p class="card-text codigo-detalle">Codigo: ${codigo}.</p>
          <!-- </div> -->
      
          <p class="card-text"><b>Descripcion:</b> ${descripcion}</p>
          <p class="card-text"><b>Aula</b>${aula}</p>
        </div>
      </div>
      
      <!-- *Asignaciones -->
      <div class="row">
        <div class="col-4 p-3 ">
          <div class="card card-detalle2">
            <div class="card-body">
              <h5 class="card-title">Por Evaluar</h5>
              <p class="card-text"> ${fecha}.</p>
              <h6 class="card-subtitle mb-2">${titulo}</h6>
            </div>
          </div>
        </div>
      
        <div class="col-8 pt-3">
          <div class="card card-detalle3">
            <img class="img-detalle" src="/img/profile-pics/${img}" />
            <div class="card-body text-detalle">
              Anunciar algo a tu clase.
              <i class="fas fa-retweet"></i>
            </div>
          </div>
          
          <div class="card card-detalle4">
            <img class="img-detalle" src="/img/profile-pics/${img}" />
            <div class="card-body text-detalle">
              <i class="fas fa-ellipsis-v"></i>
              <h5 class="card-title title-det4">${instructor}</h5>
              <p class="card-text text-det4"> ${fecha}</p>
              <p class="card-text text2-det4"> ${msj}</p>
            </div>
            <div class="card card2-detalle4">
              <img class="img-detalle" src="/img/profile-pics/${img}" />
              <div class="card-body text-detalle">
                <i class="far fa-paper-plane"></i>
                <input type="text" class="form-control input-det4" placeholder="Add Class Comment">
                <!-- <i class="fas fa-retweet"></i> -->
              </div>
            </div>
          </div>
      
        </div>
      </div>

        `
      }
      
    }


    // console.log(classroom.clases[d].nombreClase);
  }
   
}
  


function ventanaAsignaciones(){
  console.log("Hello Asignaciones");
    document.getElementById('todalas-clases').innerHTML =
  `
  <h1>Hello Asignaciones</h1>
  `
}
function ventanaParticipantes(){
  console.log("Hello Participantes");
    document.getElementById('todalas-clases').innerHTML =
  `
  <div class="col-12 img-inicio">
    <img class="img-inicio" src="/img/ventanas/data_image_svg+xml;… (2).svg" alt="">
  </div>
  `
}

function addClass(){
  i = indiceSelect 
  console.log('Crear clase', i);

  nombreClase = document.getElementById('nombreClase').value;
  codigo = document.getElementById('codigo').value;
  seccion = document.getElementById('seccion').value;
  aula = document.getElementById('aula').value;
  
  z=i
  if(z == i){

  // clase = classroom.clases
  // for (const c in classroom) {
    // console.log(classroom[i].clases);
    clase = classroom[i].clases
  // }
      clas = {
            nombreClase: nombreClase,
            codigo: codigo,
            seccion: seccion,
            imgFondo: 'detalle1.png',
            imgFondoDetalle: 'detalle2.png',
            aula: aula,
            descripcion: 'lorem ipsu',
            participantes: [],
            anuncios: [],
            asignaciones: []
           }
    
      clase.push(clas)
      localStorage.setItem("classroom", JSON.stringify(classroom));
      alert('Class add successfull')
      console.log(clas);
       generarInstructores();

    }


}