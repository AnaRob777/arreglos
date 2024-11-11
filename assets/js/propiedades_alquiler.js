const arriendos = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2",
        baños: "2",
        precio: "2.000",
        smoke: false,
        pets: true
    
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3",
        baños: "3",
        precio: "2.500",
        smoke: true,
        pets: true
    
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2",
        baños: "2",
        precio: "2.200",
        smoke: false,
        pets: false
    
    },
    {
        nombre: "Casa cerca de Casino",
        src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        descripcion: "Hermosa casa caercana a popular casino",
        ubicacion: "123 perico los palotes",
        habitaciones: "3",
        baños: "2",
        precio: "2.000",
        smoke: true,
        pets: true
    
    },
    {
        nombre: "Casa de lujo",
        src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        descripcion: "Casa espectacular con diseño moderno",
        ubicacion: "443, San alfonso",
        habitaciones: "4",
        baños: "3",
        precio: "3.000",
        smoke: false,
        pets: false
    
    },
    {
        nombre: "Casa frente al río",
        src: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        descripcion: "Hermosa casa frente al río",
        ubicacion: "564, Valdivia",
        habitaciones: "3",
        baños: "3",
        precio: "3.200",
        smoke: false,
        pets: true
    
    },
]
const elementoHTML = document.querySelector(".row")
let card2 = ""
for (let arriendo of arriendos){
    card2+= `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${arriendo.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${arriendo.nombre}
                </h5>
                <p class="card-text">
                ${arriendo.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${arriendo.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${arriendo.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${arriendo.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${arriendo.precio}</p>
                <p style="color: ${arriendo.smoke ? "green":"red"}"> ${arriendo.smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>' } ${arriendo.smoke ? "Permitido fumar" : "Está prohibido fumar" }</p>
                <p style="color: ${arriendo.pets ? "green" : "red"}">${arriendo.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'} ${arriendo.pets ?"Mascotas permitidas" : "Están prohibidas las mascotas" }
              </div>
            </div>  
          </div>`
}
elementoHTML.innerHTML = card2