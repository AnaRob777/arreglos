const ventas = [
    {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4",
    baños: "4",
    precio: "5.000",
    smoke: false,
    pets: false,
},
{
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña, hermosa vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 234568",
    habitaciones: "2",
    baños: "1",
    precio: "1.200",
    smoke: true,
    pets: true,
},
{
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3",
    baños: "3",
    precio: "4.500",
    smoke: false,
    pets: true,
},
{
    nombre: "Casa en recinto residencial",
    src: "https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    descripcion: "Hermosa casa unibacada en recinto residencial",
    ubicacion: "890, las Vizcachas",
    habitaciones: "2",
    baños: "1",
    precio: "2.000",
    smoke: true,
    pets: true,
},
{
    nombre: "Casa moderna",
    src: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    descripcion: "Hermosa casa con diseño minimalista",
    ubicacion: "543, azafrán",
    habitaciones: "4",
    baños: "3",
    precio: "5.000",
    smoke: true,
    pets: true,
},
{
    nombre: "Casa en la playa",
   src: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    descripcion: "Hermosa casa en la playa con vista al mar",
    ubicacion: "1500, Ventanas ",
    habitaciones: "3",
    baños: "1",
    precio: "3.000",
    smoke: true,
    pets: false,

},
]

const elementoHTML = document.querySelector(".row")
let card = ""
for (let venta of ventas){
    card+= `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${venta.nombre}
                </h5>
                <p class="card-text">
                ${venta.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${venta.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.precio}</p>
                <p style="color: ${venta.smoke ? "green":"red"}"> ${venta.smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>' } ${venta.smoke ? "Permitido fumar" : "Esta Prohibido fumar" }</p>
                <p style="color: ${venta.pets ? "green" : "red"}">${venta.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'} ${venta.pets ?"Mascotas permitidas" : "Estan prohibidas las mascotas" }</p>
              </div>
            </div>  
          </div>`
}
elementoHTML.innerHTML= card