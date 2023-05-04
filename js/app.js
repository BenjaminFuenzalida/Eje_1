//console.log("estamos conectados");
 $(document).ready(function(){
    console.log("estamos conectados");
    
    // Accediendo al DOM
    //$('h1').html("INTRODUCCION A JQUERY DESDE JQ-NOMBRE ETIQUETA");
    //$('#titulo').html("INTRO A JQUERY DE JQ");
    $('.display-4').html("INTRO A JQ CAMPBIO CLASE");

    //MANIPULANDO EL DOM
    // AGREGANDO ELEMENTOS DE DOM
    $('#par1').addClass('text danger');
    //$('#par2').

    //AGREGANDO ETIQUETAS
    $('container:first').append("<p> este es un parrafo agregado desde JQUERY</p>");
    
    
});