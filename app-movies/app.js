let movies = require ('./movies');

//objeto literal (moviesDH) que contendrá todas las funcionalidades que el cliente solicita.

let moviesDH = {

    //Retorna el listado de todas las películas existentes.
    listMovies: ()=> movies.forEach(movies => console.log(movies)),
        
    searchMovie: function(tituloId){
        // Uso el metodo .find para comparar si el titulo y el id se encuentra en la lista  
        let peliculaEncontrada = movies.find (function(movie){
            return movie.title == tituloId || movie.id == tituloId       
        })

        /*Si la película no se encuentra en la lista, el método find me devuelve UNDEFINE,
        si ese el caso, con el if lo cambio a NULL como pide la consigna,
        caso contrario retorna la película encontrada*/

        if (peliculaEncontrada != undefined){
        return peliculaEncontrada
        }else{
            return null 
        }
    },

    searchMoviesByGenre : function(genero){
        
        let peliculaEncontradaPorGenero = movies.filter(movie => movie.genre == genero);
        return peliculaEncontradaPorGenero
        
    },   

    totalPrice : function(){

        let suma = movies.reduce (function(acumulador,numero){
           return acumulador + numero.price
        }, 0 )
        return suma          

    },
    /* Por último, nuestro tech leader se da cuenta que algunas de las
películas deben cambiar de género. Para esto nos pide que creemos
una funcionalidad changeMovieGenre que reciba el id de una
película y el nuevo género a cambiar. Para esto deberíamos utilizar
funcionalidad ya existente (searchMovie) y cambiar el género de la
película encontrada. */
    changeMovieGenre: function(peliculaId,genero){
        let busquedaPorId = this.searchMovie(peliculaId)
        if(busquedaPorId != null){
            busquedaPorId.genre = genero
            return "Se cambio el genero"
            
        }else{
            return "No se encutro la pelicula"
        }
        
    }

}
console.log(moviesDH.changeMovieGenre(6,"Rcoco"))
console.log(moviesDH.listMovies(6))

