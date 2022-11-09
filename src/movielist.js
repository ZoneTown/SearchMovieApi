import React from 'react';

const Movielist = (props) => {
    return (
        <>
            {props.movies.map((movie,index) => (
                <div>
                    <p>{movie.Title}</p>
                    <img src={movie.Poster}/>
                </div>
            ))}
        </>
    );
}

export default Movielist