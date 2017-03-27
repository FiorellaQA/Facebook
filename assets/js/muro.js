var ingresante = JSON.parse(localStorage.getItem("ingresante"));

function agregarPost(){
//Clonamos "div-contenedor"
	var template = document.getElementById("template-post").children[0].cloneNode(true);
//Obtenemos el valor de textarea
	var textarea = document.getElementById("textarea").value;
//Validando si existe un post
	if(textarea == ""){
        document.getElementById("textarea").setAttribute("placeholder","Debes escribir algo para publicar!!!");
        document.getElementById("textarea").className = "error";
        return false;
    }
//Guardamos el valor de textarea en el arreglo post respectivamente
	if(ingresante.email == usuarios[0].email){
		usuarios[0].post.push({texto: textarea});

	}
	if(ingresante.email == usuarios[1].email){
		usuarios[1].post.push({texto: textarea});
	}
//Mostramos los post guardados:
	if(ingresante.email == usuarios[0].email){
		var array = usuarios[0].post;
		array.forEach(function(e){
			//<p>
			template.getElementsByClassName("textPost")[0].innerHTML = e.texto;
			//<input>
			template.getElementsByClassName("inputPost")[0].value = e.texto;

		});
	}
	if(ingresante.email == usuarios[1].email){
		var arr = usuarios[1].post;
		arr.forEach(function(f){
			//<p>
			template.getElementsByClassName("textPost")[0].innerHTML = f.texto;
			//<input>
			template.getElementsByClassName("inputPost")[0].value = f.texto;

		});
	}
	console.log(usuarios);

//Añadimos los eventos:
	template.getElementsByClassName("editar")[0].addEventListener("click", editar);
	template.getElementsByClassName("eliminar")[0].addEventListener("click", eliminar);
	template.getElementsByClassName("guardar")[0].addEventListener("click", guardar);
//Insertando template al <div> containerPost
	containerPost.appendChild(template);
//Limpiamos el campo textarea
	document.getElementById("textarea").value = "";
}
function editar(el){
	//Ocultamos el <div class="post">..</div>
	el.target.parentElement.parentElement.getElementsByClassName("post")[0].style.display = "none";
	//Mostramos el <div class="form">..</div>
	el.target.parentElement.parentElement.getElementsByClassName("form")[0].style.display = "block";
}

function guardar(el){
	var newText = el.target.parentElement.getElementsByClassName("inputPost")[0].value;
	//Imprimimos en <p> el newText
	el.target.parentElement.parentElement.getElementsByClassName("textPost")[0].innerHTML = newText;
	//Ocultamos el <div class="form">..</div>
	el.target.parentElement.parentElement.getElementsByClassName("form")[0].style.display = "none";
	//Mostramos el <div class="post">..</div>
	el.target.parentElement.parentElement.getElementsByClassName("post")[0].style.display = "block";
}

function eliminar(el){
	if(confirm("Estas seguro que quieres borrar tu post?")){
    	//Eliminamos TODO el <div class="div-contenedor">..</div>
    	el.target.parentNode.parentNode.remove();
    }
}

var btnAgregar = document.getElementById("btn-agregar");
var containerPost = document.getElementById("containerPost");
btnAgregar.addEventListener("click",agregarPost);
