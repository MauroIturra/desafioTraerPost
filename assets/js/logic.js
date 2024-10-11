let b = document.getElementById("btn");

b.addEventListener("click", async function(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();

    let datosApi = document.getElementById("post-data");
    let listaDatos = document.createElement('ul');
    datosApi.appendChild(listaDatos);

    for(let element of data){
        let itemInformacion = document.createElement('li');
        listaDatos.appendChild(itemInformacion);        

        
        let tituloDestacado = document.createElement('strong');
        tituloDestacado.innerText = element.title + '\n';
        itemInformacion.appendChild(tituloDestacado);
        

        let cuerpoPost = document.createElement('span');
        cuerpoPost.innerText = element.body + '\n'+'\n';
        itemInformacion.appendChild(cuerpoPost);
        
    }

})
