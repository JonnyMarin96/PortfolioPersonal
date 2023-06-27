
function btnSubmit(){

    nombre = document.getElementById('formNombre').value;
    correo = document.getElementById('formCorreo').value;
    asunto = document.getElementById('formAsunto').value;
    mensaje = document.getElementById('formMensaje').value;
    
    verificadorNombre();
    verificadorCorreo();
    verificadorAsunto();
    verificadorMensaje();

    if(flagNombre == true && flagCorreo == true && flagAsunto == true && flagMensaje == true){
        enviarCorreo();
    }
}

    function verificadorNombre(){
        largo = 50;
        flagNombre = false;

        if(nombre.length > 0){
            if(nombre.length > largo){
                alert("El campo Nombre solo permite " + largo + " caracteres");
                document.getElementById('formNombre').style.border = " 2px solid #D96055";
                document.getElementById('formNombre').style.boxShadow = "0 0 8px #D96055";
            }else{
                document.getElementById('formNombre').style.boxShadow = "none";
                document.getElementById('formNombre').style.border = "none";
                flagNombre = true;
            }
        }else{
            alert("El campo Nombre no puede estar vacio");
            document.getElementById('formNombre').style.border = " 2px solid #D96055";
            document.getElementById('formNombre').style.boxShadow = "0 0 8px #D96055";
        }
    }

    function verificadorCorreo(){
        largo = 50;
        flagCorreo = false;
        var emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(correo.length > 0){

            if(emailValido.test(correo) == true){
                document.getElementById('formCorreo').style.boxShadow = "none";
                document.getElementById('formCorreo').style.border = "none";
                flagCorreo = true;
            }else{
                alert(correo + " no es un correo valido");
                document.getElementById('formCorreo').style.border = " 2px solid #D96055";
                document.getElementById('formCorreo').style.boxShadow = "0 0 8px #D96055";
            }

        }else{
            alert("El campo e-mail no puede estar vacio");
            document.getElementById('formCorreo').style.border = " 2px solid #D96055";
            document.getElementById('formCorreo').style.boxShadow = "0 0 8px #D96055";
        }
    }

    function verificadorAsunto(){
        largo = 50;
        flagAsunto = false;

        if(asunto.length > 0){
            if(asunto.length > largo){
                alert("El campo Asunto solo permite " + largo + " caracteres");
                document.getElementById('formAsunto').style.border = " 2px solid #D96055";
                document.getElementById('formAsunto').style.boxShadow = "0 0 8px #D96055";
            }else{
                document.getElementById('formAsunto').style.boxShadow = "none";
                document.getElementById('formAsunto').style.border = "none";
                flagAsunto = true;
            }
        }else{
            alert("El campo Asunto no puede estar vacio");
            document.getElementById('formAsunto').style.border = " 2px solid #D96055";
            document.getElementById('formAsunto').style.boxShadow = "0 0 8px #D96055";
        }        
    }

    function verificadorMensaje(){
        largo = 300;
        flagMensaje = false;

        if(mensaje.length > 0){
            if(mensaje.length > largo){
                alert("El campo Mensaje solo permite " + largo + " caracteres");
                document.getElementById('formMensaje').style.border = " 2px solid #D96055";
                document.getElementById('formMensaje').style.boxShadow = "0 0 8px #D96055";
            }else{
                document.getElementById('formMensaje').style.boxShadow = "none";
                document.getElementById('formMensaje').style.border = "none";
                flagMensaje = true;
            }
        }else{
            alert("El campo Mensaje no puede estar vacio");
            document.getElementById('formMensaje').style.border = " 2px solid #D96055";
            document.getElementById('formMensaje').style.boxShadow = "0 0 8px #D96055";
        }  
    }

    function enviarCorreo(){
        const btn = document.getElementById('boton');

        emailjs.init('GBSOEPCuFYyFStLJM');

        document.getElementById('formulario').addEventListener('submit',
            function(event){
                event.preventDefault();
                btn.value = 'Enviando...';
                const serviceID = 'service_kac0wkf';
                const templateID = 'template_oangpnp';

                emailjs.sendForm(serviceID, templateID, this)
                .then(() =>
                    {
                        btn.value = 'Send Email';
                        alert('Email enviado con exito');

                        document.getElementById('formNombre').value = "";
                        document.getElementById('formCorreo').value = "";
                        document.getElementById('formAsunto').value = "";
                        document.getElementById('formMensaje').value = "";

                    }, (err) => {
                        btn.value = 'Send Email';
                        alert(JSON.stringify(err));
                    }
                );
            }
        );
    }




var nombre, flagNombre;
var correo, flagCorreo;
var asunto, flagAsunto;
var mensaje, flagMensaje;
var largo = 0;