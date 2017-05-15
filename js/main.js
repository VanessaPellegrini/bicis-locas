function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;

//validaciones y creación de nodos
	function valName(){
		if(name==""){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("lalalalala");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}
	}
valName();
/*
else if(lastName==""){
			var nodoPadre = document.getElementsByClassName("lastname-container input-box")[0];
			var mensaje = document.createElement("span1");
			var last_Name = document.createTextNode("alalalalal");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}*/
}