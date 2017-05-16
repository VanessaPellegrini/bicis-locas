function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var index = document.getElementsByClassName("form-control")[5].value;
	var tweetNick = document.getElementById("input-social").value;
	var checkbox = document.getElementsByClassName("checkbox ")[0];
	var firstChar = /([A-Z])[a-z]/;
	var notNumber = /([0-9])/;

	//validaciones y creación de nodos
	/*Validación nombre
	*Campo obligatorio
	*nombre sin números
	*La primera letra mayús
	selectedIndex
	*/
	function valName(){
		if(name==""){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}else if(!firstChar.test(name)) {
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("Recuerde ingresar su nombre con mayúscula");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}else if(notNumber.test(name)){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("El nombre no debe llevar números");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}else{
			return true;
		};
	}
	valName();
	/*
	Validación apellido
	*Obligatorio
	*Solo mayús
	*Mayús
	*/
	function valLastName(){
		if(lastName==""){
			var nodoPadre = document.getElementsByClassName("lastname-container input-box")[0];
			var mensaje = document.createElement("span");
			var last_name_vacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(last_name_vacio);
		}else if(!firstChar.test(lastName)){
			var nodoPadre = document.getElementsByClassName("lastname-container input-box")[0];
			var mensaje = document.createElement("span");
			var last_name_mayus = document.createTextNode("Recuerde ingresar su apellido con mayúscula");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(last_name_mayus);
		}else if(notNumber.test(lastName)){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var last_name_number = document.createTextNode("El nombre no debe llevar números");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(last_name_number);
		}else{
			return true;
		};

	};
	valLastName();

	/* Validación email
	*obligatorio
	*formato válido email 
	*/
	function valEmail(){
		var validateEmail = /\w+@\w+\.+[a-z]/;
		if(email==""){
			var nodoPadre = document.getElementsByClassName("email-container input-box")[0];
			var mensaje = document.createElement("span");
			var email_vacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(email_vacio);
		}else if(!validateEmail.test(email)){
			var nodoPadre = document.getElementsByClassName("email-container input-box")[0];
			var mensaje = document.createElement("span");
			var incorrect_email= document.createTextNode("El formato de su correo es incorrecto ");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(incorrect_email);
		}else{
			return true;
		};
	};
	valEmail();
	/* Validación password
	*obligatorio
	*el campo pass no debe ser igual a "password" o "123456"
	o "098754"
	*al menos 6 digitos
	*/
	function valPass(){
		if(pass==""){
			var nodoPadre = document.getElementsByClassName("form-group input-box")[0];
			var mensaje = document.createElement("span");
			var pass_vacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(pass_vacio);
		}else if((pass == "password") || (pass== 123456) || (pass== "098754")){
			var nodoPadre = document.getElementsByClassName("form-group input-box")[0];
			var mensaje = document.createElement("span");
			var pass_pass = document.createTextNode("Su contraseña no puede ser: password, 123456 o 098754");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(pass_pass);
		}else if(pass.length < 5){
			var nodoPadre = document.getElementsByClassName("form-group input-box")[0];
			var mensaje = document.createElement("span");
			var pass_pass = document.createTextNode("Su contraseña debe tener al menos 6 caracteres");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(pass_pass);
		}else{
			return true;
		};
	};
	valPass();
	/* validar lista
	*/
	function valIndex(){
		if(index == "" || index == "0") {
			var nodoPadre = document.getElementsByClassName("form-group input-box")[1];
			var mensaje = document.createElement("span");
			var index_msj = document.createTextNode("Debe seleccionar al menos una opción");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(index_msj);
  			
  		}else{
  			return true;
  		};
  
	};
	valIndex();
	/************************FUNCIONAN*************************************************
	validar tweet
	
	function valTweet(){
		if(tweetNick==""){
			var nodoPadre = document.getElementsByClassName("input-group")[0];
			var mensaje = document.createElement("span");
			var tweet = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(tweet);
		}else{
			return true;
		};
	};
	valTweet();
	/*
	validar checkbox
		function valCheck(){
		if( !checkbox.checked ){
  			var nodoPadre = document.getElementsByClassName("checkbox ")[0];
			var mensaje = document.createElement("span");
			var check= document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(check);
		}else{
			return true;
		};
	};
	valCheck();
	*/
}