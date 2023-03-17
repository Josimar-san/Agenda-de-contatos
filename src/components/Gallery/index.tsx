
import { Title } from '../Title/index.js';
import { movies } from './data.js';
import { useState } from 'react';

export  function Gallery() {
  const [index, setIndex] = useState(0);

  function handleProximo() {
    setIndex(index + 1);
  }
  function handleVoltar() {
    setIndex(index - 1);
  }

  let movie = movies[index];
  return (
    <>
      <button onClick={handleProximo}>
        Proximo
      </button>
     <button onClick={handleVoltar}>
        Voltar
    </button>
      <h2>
        <i>{movie.title} </i> 
        
      </h2>
    {/*   <h3>  
        ({index + 1} de {movies.length})
      </h3> */}
      <img src={movies[index].images.poster} alt="" />
     {/*  <p>
        {movie.synopsis}
      </p> */}
    </>
  );
}