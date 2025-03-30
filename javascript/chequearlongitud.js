function checkLongitud(longitud) {
    /* TU CODIGO */
    if (longitud == null){
       return "debe ingresar la longitud";
    }
    else if(typeof longitud != "string"){
      return "La longitud recibida no es válida";
    } else if(3 > longitud.length ){
      return "La longitud debe ser igual o mayor que 3";
    } else if(longitud.length  > 10 ){
      return "La longitud debe ser menor o igual a 10";
    } else return longitud;
    
      
  }

  var longitud = prompt("ingresa longitud")
  checkLongitud(longitud)
