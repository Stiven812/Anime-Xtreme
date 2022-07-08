// --------------------------------------------Esta seccion obtiene los elementos del DOM--------------------------------------------
const cont2 = document.querySelector("#cont2");
const contImg = document.querySelectorAll(".contImg")
const items = document.getElementById("items");
//const exampleModal = document.getElementById("exampleModal");
const templateTarjetas = document.getElementById("template-tarjetas").content;
const templateDescripcionTarjetas = document.getElementById("templateDescripcionTarjetas").content;
const descripcionAnime = document.getElementsByClassName("descripcionAnime");
const ventanaModal = document.getElementById("ventanaModal");
const ventanaModal2 = document.getElementById("ventanaModal2");
const ventanaModal3 = document.getElementById("ventanaModal3");
const btnTrailer = document.getElementById("btnTrailer");

const descripcion = document.getElementsByClassName("descripcion");
const fragment = document.createDocumentFragment();

let arraydescripcion = [];

// -------------------funcion para animar el banner------------------------
let ultimaImagen = contImg[contImg.length-1];
cont2.insertAdjacentElement("afterbegin", ultimaImagen);

const next = ()=>{
    let primerImagen = document.querySelectorAll(".contImg")[0];
    cont2.style.marginLeft = "-200%";
    cont2.style.transition = "all 0.7s";
    setTimeout(function(){
        cont2.style.transition = "none";
        cont2.insertAdjacentElement("beforeend", primerImagen);
        cont2.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){next();}, 4000);

// ------------------------------Obtener datos de la API y mostrarlos en la web-----------------------------
document.addEventListener("DOMContentLoaded", e => 
{   
    fetchdatos();
    //fetchdatos2();
});
//(function(){ })();// Sintaxis Funcion autoejecutable

let datos;
const fetchdatos = async() => 
{
    try {
        const respuesta = await fetch("api.json");
        datos = await respuesta.json();                
        
        //console.log(datos);
        mostrarTarjetas(datos);
        mostrardescripcion(datos);

        
        
        
    } catch (error) {
        
    }
}

items.addEventListener("click", (e)=>
{
    
    if(e.target.classList.contains("descripcion"))
    {
        //prueba =parseInt(e.target.dataset.id);
        prueba = e.target.parentElement.lastElementChild;
        // prueba = e.target.parentElement.firstElementChild;
        // datos.forEach(elementos =>{
            
        //     desc = elementos.id;
        //     console.log(desc);

        //     //console.log(desc);                    
        // });
        //prueba = e.target.parentNode.parentNode.parentNode.childNodes[3].textContent;
        
        ventanaModal.innerHTML = prueba.innerHTML;
        ventanaModal.style.visibility = "visible";        
        console.log(prueba); 
    }

    if(e.target.classList.contains("btn-card"))
    {
        prueba = e.target.parentElement.lastElementChild; 
        //prueba = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild.attributes[0];    
        //prueba = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild;    
        
        ventanaModal.style.visibility = "hidden";
        ventanaModal.style.visibility = "visible";
        ventanaModal2.innerHTML = prueba.innerHTML;
        console.log(prueba);
        
    }

    // if(e.target.classList.contains("link-contacto"))
    // {
    //     prueba = e.target.parentElement.lastElementChild; 
    //     //prueba = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild.attributes[0];    
    //     //prueba = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild;    
        
    //     ventanaModal.style.visibility = "hidden";
    //     ventanaModal2.style.visibility = "hidden";
    //     ventanaModal3.style.visibility = "visible";
        
        
        
    // }
    
});

items.addEventListener("click", (e)=>
{
    
    if(e.target.classList.contains("btn-card"))
    {
        prueba = e.target.parentElement.lastElementChild; 
        //prueba = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild.attributes[0];    
        //prueba = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild;    
        
        ventanaModal.style.visibility = "hidden";
        ventanaModal.style.visibility = "visible";
        ventanaModal2.innerHTML = prueba.innerHTML;
        console.log(prueba);
        
    }
    
});


function mostrarTarjetas(datos)
{
    
    datos.forEach(elementos => {
        templateTarjetas.querySelector("img").setAttribute("src", elementos.imagen);
        templateTarjetas.querySelector("h3").textContent = elementos.titulo;
        templateTarjetas.querySelector("p").textContent = elementos.descripcion;
        templateTarjetas.querySelector("button").dataset.id = elementos.id;
        
        
        
        const clon = templateTarjetas.cloneNode(true)
        fragment.appendChild(clon)        
    });

    
    items.appendChild(fragment);
    
    
    // items.addEventListener("mouseover", (e)=>{
    //     e.preventDefault()
    //     Event.stopPropagation
    //     datos.forEach(element=>
    //     {
            
    //         if(e.target.classList.contains("descripcion"))
    //         {
    //             //let descrip = templateDescripcionTarjetas.querySelector("p")
    //             descripcionAnime.style.visibility = "visible"
                
    //         }            
    //     })
    //})

    // descripcion.addEventListener("mouseover", (e)=>{
    //    for(element in descripcion){
    //     if(e.target.classList.contains("descripcion"))
    //     {
    //         let descrip = templateDescripcionTarjetas.querySelector("p")
    //         descrip.style.visibility = "visible"
    //         console.log(e)
    //     }  
    //    }

    // })


    //items.addEventListener("mouseover", (e)=>{
    
        
        //console.log(descrip)
        //Object.values(e)
        // descrip.forEach(elemento =>{
        //     templateTarjetas.querySelector("p").textContent = elemento.descripcion
        //     console.log(elemento)
        // })
    //    if(e.target.classList.contains("descripcion"))
    //     {
    //         let desc = e

    //         let resultado = Object.values(templateTarjetas);

    //         console.log(resultado)
    //         //console.log(typeof templateTarjetas)
    //         // for(let elemento in descripcion) {
    //         //     console.log(desc)
    //         //     //let p = templateTarjetas.querySelector("p")
                
                
    //         // };

    //     }            
    
    //})   

}

// const fetchdatos2 = async() => 
// {
//     try {
//         const respuesta = await fetch("api.json");
//         const datos = await respuesta.json();
        
//         mostrardescripcion(datos);
        
//     } catch (error) {
        
//     }
// }

// function mostrardescripcion(datos){
//     items.addEventListener("click", (e)=>{
//         e.preventDefault();
//         e.stopPropagation;
        
        
//         if(e.target.classList.contains("descripcion"))
//         {
//             prueba = e.target.parentNode.parentNode.parentNode.childNodes[3].textContent;
//             console.log(prueba); 
            
//             const soloDescrpcion = datos.descripcion;
//         };
//     });  
// }




// items.addEventListener("mouseover", (e)=>{
//    if(e.target.classList.contains("descripcion"))
//     {
//         //  let desc = e

//         // let resultado = Object.values(desc);
        
//         // console.log(desc)
//         fetchdatos2()

//         //modal.style.display = "block"
//         //modal.style.opacity = "1"
//     }    
// })

