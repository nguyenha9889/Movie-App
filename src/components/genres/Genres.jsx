import React from 'react';
import PropTypes from 'prop-types';
import './genres.scss';


function Genres({genres}) {
    const genresList = genres.slice(0, 2);
    return (
        <div className='genres-list'>
            {genresList.length > 0 && genresList.map(item => <p key={item.id}
            className='genre'>{item.name}</p>) }
        </div>
    )
}

Genres.propTypes = {
    genres: PropTypes.array,
}

export default Genres;
