//* Para Abrir sidebar
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
                        imagen: "krilin.jpg",
                        },
                        {
                          nombre: "Trunks",
                          correo: "trunks@gmail.com",
                          imagen: "trunks.jpg",
                          }
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
        imgFondoDetalle: "detalle2.png",
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
      imgFondoDetalle: "detalle2.png",
      aula: "B-12",
      descripcion: "Clase donde se enseña a programar bien",
      participantes: [
                      {
                      nombre: "Pan",
                      correo: "pan@gmail.com",
                      imagen: "pan.png",
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

var clasSelect = null


if (localStorage.getItem('classroom')==null) {
  localStorage.setItem("classroom", JSON.stringify(classroom));
} else {
  classroom = JSON.parse(localStorage.getItem('classroom'))
}


var i = 0; 

  imP = classroom[i].instructor
  btnPerfil = imP.imagen
  imPer = ` <img class="circular--square btn-sm card-img2" src="/img/profile-pics/${btnPerfil}"/>`
  // i++
  // console.log(imPer);

  // console.log(imPer);





//* guardando el navbar en la variable navbar
var navbar = `<nav class="navbar navbar-light nav-class">
        <div class="container-fluid">
          <a class="navbar-brand logo-classroom" href="#">
            <img src="#" alt="" class="d-inline-block align-text-top">
            <span></span>
          </a>
          
          <!-- <div class="iconos-nav"> -->
            <!-- * Icono 1 -->

            <div class="ico-plus">
              <div class="btn-group">
                <button class="btn btn-light mr-2" id="dLabel" type="button" dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-plus"></i>
                </button>

                <ul class="dropdown-menu dropdown-menushow">
                  <!-- <div class="dropdown-menu dropClass2" aria-labelledby="dLabel"> -->
                    <a class="dropdown-item" href="#">Unirse a Clase</a>
                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#addClassModal" >Crear Clase</a>
                <!-- </div> -->
                  <!-- <h1>plus</h1> -->
                </ul>
              </div>
            </div>
            
            <!-- * Icono 2 -->

            <div class="ico-th "><i class="fas fa-th"></i></div>
            <!-- * Icono 3 -->
            <div class="ico-users" onclick="generarInstructores()">
              <div class="btn-group" id="img-perfil">
                <button type="button" class="btn btn-default" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <!-- <i class="fas fa-users btn-sm"></i> -->
                 ${imPer}
                  <!-- <img class="circular--square btn-sm card-img2" src="/img/profile-pics/goku.jpg" /> -->
                </button>
                  <ul class="dropdown-menu ventana-instructor">
                    
                    <div class="card mb-3">

                        <div class="row no-gutters" id="add-instructor">
                            <!-- <div class="col-md-4">
                              <img class="circular--square card-img" src="/img/profile-pics/goku.jpg" />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                  <h5 class="card-title">Goku</h5>
                                  <h6 class="card-subtitle mb-2 text-muted">goku@gmail.com</h6>   
                              </div>
                            </div> -->
                      </div>

                      <hr>
                      <div class="text-center">
                          <i class="fas fa-user-plus"></i>
                          <a href="#" class="card-link btn-light" onclick="addInstructor()" data-bs-toggle="modal" data-bs-target="#newInstructorModal"">Agregar Instructor</a>
                      </div>
                      <div class="foTargetaPerfil pt-3 text-center">
                          <a>Politica de privacidad</a> *
                          <a>Temas Services</a>
                          <a href="/">Cerrar Session</a>

                      </div>
                  </div>
                  </ul>
                </div>
              </div>

        </div>
        </nav>`



//* generar instructores

function generarInstructores(){
  document.getElementById('add-instructor').innerHTML = '';
  document.getElementById("clases2-nav").innerHTML = ''; 
  // console.log('instructores',classroom);

  classroom.forEach(function(inst,i){
    // console.log(inst.instructor.nombre);
      nome = inst.instructor.nombre
      correo = inst.instructor.correo
      img= inst.instructor.imagen
      // img2= inst.instructor.imagen

        document.getElementById("clases2-nav").innerHTML += 
        `<p onclick="generarClases(${i})"></i>Instructor ${nome}</p>`

         document.getElementById('add-instructor').innerHTML +=
         `<div class="col-md-4">
           <img onclick=" generarClases(${i})" class="circular--square card-img img-inst" src="/img/profile-pics/${img}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
               <h5 class="card-title title-inst">${nome}</h5>
               <h6 class="card-subtitle mb-2 text-muted correo-inst">${correo}</h6>   
            </div>
          </div>
         `
    });


}

//*Agregar un instructor
function addInstructor(){
  console.log('Nuevo instructor');
}

//*Poblar el selec de instructores posibles
manager = ['androide_16.jpg','androide_18.jpg','androide_19.jpg','baby.jpg','bulma.jpg','kibito.jpg','picoro.jpg',
          'roshi.jpg','kami.jpg','dende.jpg','mr_satan.jpg','cell.jpg','freezer','goku.jpg','vegeta.jpg'] 



 for (let i = 0; i <manager.length; i++) {
  // console.log(manager[i]);
   document.getElementById('list-inst').innerHTML += 
   `<option value="${manager[i]}">${manager[i]}</option>`
}

//*Nuevo Instructor
function newInstructor(){
  i =indiceSelect
  nombre = document.getElementById('nombre-inst').value;
  correo = document.getElementById('correo-inst').value;
  list = document.getElementById('list-inst').value;
    
  inst = classroom.instructor
     instr = {
          instructor: {
            nombre: nombre,
            correo: correo,
            imagen: list
          },
          clases: [
            { //*clase 1
              nombreClase: "Redes 1",
              codigo: "RED11XZ",
              seccion: "1400",
              imgFondo: "detalle2.png",
              imgFondoDetalle: "detalle2.png",
              aula: "B-14",
              descripcion: "Clase donde se enseña Redes",
              participantes: [
                              {
                              nombre: "Trunks",
                              correo: "trunks@gmail.com",
                              imagen: "trunks.jpg",
                              },
                              // ...Otro participante
              ],
              anuncios: [
                      {
                        mensaje: "Hoy es el examen de Redes",
                        fecha: "08/11/2020",
                      },
                        // ...Otro anuncio
              ],
              asignaciones: [
                        {
                          titulo: "Tarea 3 ",
                          descripcion: "Entregar una red",
                          fecha: "08/12/2020",
                        },
                          // ...Otra asignación
              ],
            },
          ]
        }
     classroom.push(instr)
     localStorage.setItem("classroom", JSON.stringify(classroom));
    //  generarClases()
     
     alert('Instructor add successfull')

}


//*generar clases
function  generarClases(i) {
  //* captuarando el indice del instructor seleccionado
  indiceSelect = i

  document.getElementById('todalas-clases').innerHTML = '';
  document.getElementById('clases-nav').innerHTML = '';
  // console.log(classroom[i].clases);
  clasInst = classroom[i].clases
  // console.log(clasInst);
 
  //*Genera el Navbar guardado en la variable  navbar
  document.getElementById('todalas-clases').innerHTML = navbar

  clasInst.forEach(function(clase, d){
        // console.log(clase.asignaciones);
     clas = clase.asignaciones
     nombreClase = clase.nombreClase
    // console.log(nombreClase);
  
    //* Genera nombre de las clases en el sidebar 
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
      
          //*Genera toda las clases por cada instructor
            document.getElementById('todalas-clases').innerHTML += 
            `<div class="col-12 col-sm-6 col-md-6 col-xl-3">
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
   clasSelect =  d 
  // console.log('instructor', indiceSelect);
  i =indiceSelect
  // console.log(classroom.instructor);
    estude = '';
  
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
   
    // btnPerfil = img  
    // console.log(img);

    var estudents = classroom[z].clases[d].participantes
    // console.log(estudents);
    for (const e in estudents) {
      // console.log(estudents[e].nombre);
      estudiante = estudents[e].nombre
      // console.log(estudiante);
      imgEstudiante = estudents[e].imagen
      correoEstudiante = estudents[e].correo
    
      // console.log(estudents);
      asignaciones = classroom[z].clases[d].asignaciones
      anuncios = classroom[z].clases[d].anuncios
      asig ="";
      for (let a = 0; a < asignaciones.length; a++) {
        titulo = asignaciones[a].titulo
        fecha = asignaciones[a].fecha
        descripcion = asignaciones[a].descripcion
        
        // console.log(asignaciones[a].titulo);

        taregetaAnun ='';
        
        for (let n = 0; n < anuncios.length; n++) {
          msj = anuncios[n].mensaje
          fechaAnu = anuncios[n].fecha
          // console.log(anuncios[n].mensaje);   
          // document.getElementById('todalas-clases').innerHTML = 

          //*Genera targetas de comentarios
          taregetaAnun +=
          `  <div class="card card-detalle4" id="targeta-anuncio">
                <img class="img-detalle" src="/img/profile-pics/${img}" />
                
                <div class="card-body text-detalle">
                    <i class="fas fa-ellipsis-v"></i>
                    <h5 class="card-title title-det4">${instructor}</h5>
                    <p class="card-text text-det4"> ${fechaAnu}</p>
                    <p class="card-text text2-det4"> ${msj}</p>
                </div>
            
                <div class="card card2-detalle4">
                    <img class="img-detalle" src="/img/profile-pics/${img}" />
                    <div class="card-body text-detalle">
                        <i class="far fa-paper-plane" onclick="sendComment()"></i>
                        <input id="comment" type="text" class="form-control input-det4" placeholder="Add Class Comment">
                    </div>
                </div>
            </div>
          ` 

          //*Genera todo el detalle de la clase seleccionada
          document.getElementById('todalas-clases').innerHTML =
          `
          ${navbar}
      
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
            
            ${taregetaAnun}
           
        
          </div>
        </div>

          `
        }

         //*Generar Asignaciones
          asig +=
          `<div class="card-body">
            <button class="btn btn-primary btn-asig1"><i class="fas fa-clipboard-list"></i></i></button>
            ${titulo}
            <p class="text-asig" >${fecha}</p>
          </div>
          `
        
      }

     
      
        //* Generar particpantes
      estude +=
        `<div class="card card2" >
            <img class="img-detalle" src="/img/profile-pics/${imgEstudiante}" />
            <div class="card-body text-detalle">
              ${estudiante}.
              <p>${correoEstudiante}</p>
            </div>
          </div>
          `
      }
     
  }
}
   
//*Guaradar un mensaje
function sendComment(){
  c = clasSelect //*indice de la clase
  i = indiceSelect; //*indice del instructor
  
  Comment = document.getElementById('comment').value
  console.log(Comment);
  
  z=i
  if(z == i){

     msj = classroom[i].clases[c].anuncios
    

  f = new Date()

  anuncio ={
          mensaje: Comment,
          fecha: f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() ,
        }

        console.log(anuncio);
        msj.push(anuncio)
        // ventanaParticipantes()
        localStorage.setItem("classroom", JSON.stringify(classroom));
        detalleClases(i)
        // alert('Asignation add Successfull')
  
  
    }
}
  

//*Ventana mostrar Asignaciones
function ventanaAsignaciones(){
  // console.log("Hello Asignaciones", asignaciones);

  document.getElementById('todalas-clases').innerHTML =
  `
    ${navbar}
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

      <div class="col-xl-8 m-auto pt-3">
        <div class="card card-asig">
          <div class="card-body">
            <button class="btn btn-primary btn-asig" data-bs-toggle="modal" data-bs-target="#newAsignacionModal"><i class="fas fa-plus ico-asig"></i>Nueva Asignacion</button>
          </div>
          <div class="card-body" id="asig">
            ${asig}
          </div><hr>
          
      </div>

        <div class="col-12">
          <img class="img-inicio1" src="/img/ventanas/data_image_png;base… (1).png" alt="">
        </div>
      </div>


      
  `
}

//* Guardar nueva Asignacion
function newAsignacionModal(){
  console.log('new Asignacion');


  c = clasSelect //*indice de la clase
  i = indiceSelect; //*indice del instructor

  titulo =  document.getElementById('nombre-asig').value;
  descripcion =  document.getElementById('descripcion-asig').value;
  fecha =  document.getElementById('fecha-asig').value;

  z=i
  if(z == i){

     asignacion = classroom[i].clases[c].asignaciones
    
    asign = {
              titulo: titulo,
              descripcion: descripcion,
              fecha: fecha
            }
      // console.log(asignacion);  
       console.log(asign);  
      asignacion.push(asign)
      localStorage.setItem("classroom", JSON.stringify(classroom));
      alert('Asignation add Successfull')

  }
}






//*Ventana mostrar Participantes
function ventanaParticipantes(){
  // console.log("Hello Participantes");

    document.getElementById('todalas-clases').innerHTML =
  ` ${navbar}
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

      <div class="col-xl-8 m-auto pt-3">
        <div class="card card-asig">
          <div class="card-body">
            <!-- <button class="btn btn-primary btn-asig1"><i class="fas fa-user-plus"></i></i></i></button> -->
            <h4 class="title-asig">Profesor</h4>
            <i class="fas fa-user-plus text2-asig"></i>           
          </div><hr class="hr-asig">

          <div class="card card2">
            <img class="img-detalle" src="/img/profile-pics/${img}" />
            <div class="card-body text-detalle">
              ${instructor}.
            </div>
          </div>
        
            <div class="card-body">
              <h4 class="title-asig">Estudiantes</h4>
              <i class="fas fa-user-plus text2-asig"></i>
            </div><hr class="hr-asig" id="estudiante">
                ${estude}
             </div>
          </div>

        <div class="col-12">
          <img class="img-inicio" src="/img/ventanas/data_image_svg+xml;… (2).svg" alt="">
        </div>
        <p class="text-invitar">Invita Estudiantes a tu clase</p>
        <button class="btn btn-primary btn-invitar" data-bs-toggle="modal" data-bs-target="#addEstudentModal">Invitar</button>
    </div>
  `
}

//*Ventana Add New Class
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
            imgFondo: 'detalle3.png',
            imgFondoDetalle: 'detalle3.png',
            aula: aula,
            descripcion: 'lorem ipsu',
            participantes: [
                      {
                      nombre: "Oolong",
                      correo: "oolong@gmail.com",
                      imagen: "oolong.jpg",
                      },
                      // ...Otro participante
              ],
              anuncios: [
                    {
                      mensaje: "New Class ",
                      fecha: "08/11/2020",
                    },
                      // ...Otro anuncio
              ],
              asignaciones: [
                      {
                        titulo: "New  Homework ",
                        descripcion: "Entregar una red",
                        fecha: "08/12/2020",
                      },
                        // ...Otra asignación
              ],
           }
    
      clase.push(clas)
      localStorage.setItem("classroom", JSON.stringify(classroom));
      generarClases(i)

      alert('Class add successfull')
      console.log(clas);
    }
}





//*Ventana Inivitar Estudiante

for (let i = 0; i <manager.length; i++) {
  // console.log(manager[i]);
   document.getElementById('list-stu').innerHTML += 
   `<option value="${manager[i]}">${manager[i]}</option>`
}
//* Guardar un nuevo participante
function addEstudentModal(){
  c = clasSelect //*indice de la clase
  i = indiceSelect; //*indice del instructor

  nombreStu =  document.getElementById('nombre-stu').value;
  correoStu =  document.getElementById('correo-stu').value;
  listStu =  document.getElementById('list-stu').value;

  z=i
  if(z == i){

     participante = classroom[i].clases[c].participantes
    
    student = {
                  nombre: nombreStu,
                  correo: correoStu,
                  imagen: listStu
                }
              
     participante.push(student)
     localStorage.setItem("classroom", JSON.stringify(classroom));
     alert('Estudents add Successfull')
    // console.log(student);
  
  // }
  }
}

