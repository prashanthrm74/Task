

const MovieDetails = () => {

     const movie={
        name:"Jananayagan",
        HeroName:'Vijay',
        Director:"Vinoth",
        Release:"2026"
    }


  return (
    <div className="flex justify-center">

    <div className="bg-red-400 h-100vh w-100 text-center p-10 text-white rounded-xl">
         <h1>Task 4</h1>
        <h2>Movie Name: {movie.name}</h2>
        <h2>Hero Name: {movie.HeroName}</h2>
        <h2>Director: {movie.Director}</h2>
        <h2>Movie Release: {movie.Release}</h2>
    </div>
    </div>
  )
}

export default MovieDetails