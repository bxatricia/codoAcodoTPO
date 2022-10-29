let pagina=1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () =>{
    if(pagina < 10000)
    pagina +=1;
    cargarPeliculas();
    
})

btnAnterior.addEventListener('click', () =>{
    if(pagina >1)
    pagina -=1;
    cargarPeliculas();
})


const cargarPeliculas= async() => {
    try {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=79b05932e8697b1d89359c8a5dce1852&language=es-ar&page=${pagina}`);
    
    
    //Si la respuesta es correcta
    if(respuesta.status === 200){
        const datos = await respuesta.json();
        let peliculas='';
       // console.log(datos.results);
        datos.results.forEach(pelicula =>{
            peliculas +=`
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w200/${pelicula.poster_path}" alt="peliculas populares">
                
                <h3 class="titulo">${pelicula.title}</h3>
                
                </div>
                `;      
                   

            
        })
        document.getElementById('contenedor').innerHTML=peliculas;
    } else if(respuesta.status === 401){
        console.log('Datos de autenticación incorrectos');

    } else if(respuesta.status === 404){
        console.log('No hay informacion de esta película')
    } else {
        console.log('Hay un error, pruebe nuevamente')
    }
    
    }   catch(error){
        console.log(error);

    }
}
cargarPeliculas();
