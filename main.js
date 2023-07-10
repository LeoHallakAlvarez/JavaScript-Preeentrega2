alert("Bienvenidos a MotoMundo-18")
prompt("para ingresar al sitio debe ser mayor de edad, tiene mas de 18? Ingrese su edad a continuación")

// console.log(motos);

const dataBusqueda = {
    marca:'Brosetti',
    modelo:'',
    año:'',
    minimo:'',
    maximo:'',
    precio:'',
    color:'',

}

function mostrarMotos(motos){
    motos.forEach( moto =>{
        console.log(moto.marca + " " + moto.modelo +" " + moto.año + " " + moto.color +" " + moto.precio)
    })
        
    }

    function filtrarPorMarca(moto){
        if(dataBusqueda.marca){
            return moto.marca === dataBusqueda.marca
        }
        return moto;
    }

    
    function filtrarPorAño(moto){
        if(dataBusqueda.año){
            return moto.año === dataBusqueda.año
        }
        return moto;
    }


    
    function filtrarPorMinimo(moto){
        if(dataBusqueda.minimo){
            return moto.minimo >= dataBusqueda.minimo
        }
        return moto;
    }

    
    function filtrarPorMaximo(moto){
        if(dataBusqueda.maximo){
            return moto.maximo <= dataBusqueda.maximo
        }
        return moto;
    }


    
    function filtrarPorColor(moto){
        if(dataBusqueda.color){
            return moto.color === dataBusqueda.color
        }
        return moto;
    }

    
    function filtrarPorPrecio(moto){
        if(dataBusqueda.precio){
            return moto.precio === dataBusqueda.precio
        }
        return moto;
    }

    function filtrarMoto(){
        let resultado = motos.filter(filtrarMarca)
        console.log(resultado.length)
    }



    filtrarMoto();






    // mostrarMotos(motos)





