//Variables
var  btLogin = document.getElementById("btLogin");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var mensajeErrorEmail = document.getElementById("mensajeErrorEmail");
var mensajeErrorPassword = document.getElementById("mensajeErrorPassword");
//Funciones
function validarInput(){
	//Validación de input vacio 
	if(inputEmail.value == "" && inputPassword.value == ""){
		mensajeErrorEmail.innerHTML = "El campo email no debe estar vacío.";
		mensajeErrorPassword.innerHTML = "El campo password no debe estar vacío."
		return false;
	}else{
		mensajeErrorEmail.innerHTML = "";
		mensajeErrorPassword.innerHTML = "";
	}
	//Validación de email
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( ! (re.test(inputEmail.value))){
    	mensajeErrorEmail.innerHTML = "Verificar que el email tenga un formato válido. Ej: name@domain.com";
    	inputEmail.focus();
    	return false;
    }
    //Validación de password vacio
	if(inputPassword.value.trim() == ""){
		mensajeErrorPassword.innerHTML = "El campo password no debe estar vacío."
		inputPassword.focus();
		return false;
	}
	//Validación de email vacio
	if(inputEmail.value.trim() == ""){
		mensajeErrorEmail.innerHTML = "El campo email no debe estar vacío.";
		inputEmail.focus();
		return false;
	}
	//Validación de password - cantidad de caracteres
    if(inputPassword.value.length < 6){
		mensajeErrorPassword.innerHTML = "El password debe contener 6 o más caracteres.";
		inputPassword.focus();
		return false;
	}
	validarRegistro();
};
function validarRegistro(){
	var flag = false;
	var emailErrors = 0;
	var passError = false;

	usuarios.forEach(function(e){
		if(inputEmail.value == e.email && inputPassword.value == e.password){
			flag = true;
		} else {
			if(inputEmail.value != e.email)	{
				emailErrors++;
			}
			if(inputEmail.value == e.email && inputPassword.value != e.password) {
				passError = true;
			}
		}
	});

	if(flag){
		var x = {};
		x.email = inputEmail.value;
		x.password = inputPassword.value;
		localStorage.setItem("ingresante", JSON.stringify(x));

		window.location.replace("muro.html");

	} else {
		if(emailErrors == usuarios.length){
			mensajeErrorEmail.innerHTML = "Email no registrado";
		}
		if(passError){
			mensajeErrorPassword.innerHTML = "Password incorrecto";
		}
	}
};
//Eventos:
btLogin.addEventListener("click",validarInput);


