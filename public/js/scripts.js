window.onscroll = function(){   /* Al hacer scroll ejecuta la función */
    
    scroll = document.documentElement.scrollTop;  /* Cuando vayamos haciendo scroll hacia abajo */

    header = document.getElementById("header");  /* Almaceno en la variable header el header del html */

    if (scroll > 20) {  /* Si el scroll es mayor al número de pixeles que recorremos */
        
        header.classList.add('nav_mod') /* Añade la clase */

    }else if(scroll < 20){  

        header.classList.remove('nav_mod')  /* Remueve la clase */
    }


}

/* Script del nav */

document.getElementById("btn_menu").addEventListener("click", mostrar_menu) /* Para que el btn menu se añada el evento click y muetre la función */

menu = document.getElementById("header");   /* Almaceno el header */
nav = document.getElementById("nav")   /* Almaceno el nav */

function mostrar_menu() {
    menu.classList.toggle('move_content')   /* Toggle para que el presionar reaccione el menú al tocar */
    nav.classList.toggle('show_nav')
}


window.addEventListener("resize", function(){
    if(window.innerWidth > 780){
        menu.classList.remove('move_content')   /* Toggle para que el presionar reaccione el menú al tocar */
        nav.classList.remove('show_nav')
    }
})