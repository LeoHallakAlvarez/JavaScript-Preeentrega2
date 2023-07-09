alert("Bienvenidos a MotoMundo-18")
prompt("para ingresar al sitio debe ser mayor de edad, tiene mas de 18? Ingrese su edad a continuación")

// console.log(motos);

const dataBusqueda = {
    marca:'',
    modelo:'',
    año:'',
    minimo:'',
    maximo:'',
    precio:'',
    color:'',

}

function mostrarMotos(motos){
    motos.forEach( moto =>{
        console.log(moto.marca + " " + moto.modelo +" ")
    })
        
    };





