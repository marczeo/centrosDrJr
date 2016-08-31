function valida() {
	//Valida que se seleccione al menos un servicio
	var result="";
	//Fin validación servicios

	//Valida formato del teléfono
	var regExTelefono = new RegExp("[0123456789 -]");
	var telefono = document.getElementById("contact-phone").value;
	if (!telefono.match(regExTelefono) && telefono.length<8)
	{
		result+="Error en el teléfono";
	}
	//Fin validación de teléfono

	return result;
}


$(document).ready(function() {

	//Validacion formulario contacto
	$("#contact-form").submit(function(e) {
		var ret=true;
		var url = "php/sendmail.php";
		var regExTelefono = new RegExp("[0123456789 -]");
		var telefono = document.getElementById("contact-phone").value;
		var validacion= valida();
		if (validacion==""){
			$.ajax({
				type: "POST",
				url: url,
				data: $("#contact-form").serialize(),
				success: function(data)
				{
					if(data=="true")
           			{
           				alert("Se envio ");
           				document.getElementById("contact-error").innerHTML = '[DEBE LLENAR TODOS LOS CAMPOS PARA PODER DAR CLICK EN "ENVIAR"]';
           				document.getElementById("contact-form").reset();
					}
					else
					{
						alert(data);
					}
				}
         	});
		}
		else{
			document.getElementById("contact-error").innerHTML =validacion;
		}
		return false;
	});
});
