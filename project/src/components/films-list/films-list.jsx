import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';
import filmProp from '../film-screen/film.prop';
import {getSimilarFilms} from '../../utils';

function FilmsList(props) {
  const [activeFilmID, setActiveFilmID] = useState(-1);
  const {films, filmToExclude, filmsCount} = props;

  function handleHoverChange(id) {
    setActiveFilmID(id);
  }

  return (
    <div className="catalog__films-list">
      {getSimilarFilms(films, filmToExclude.id, filmsCount).map((film) => (
        <SmallFilmCard
          key={film.id}
          film={film}
          isActive={activeFilmID === film.id}
          handleHoverChange={handleHoverChange}
        />))}
    </div>
  );
}

FilmsList.propTypes = {
  filmToExclude: filmProp,
  films: PropTypes.arrayOf(
    filmProp,
  ),
  filmsCount: PropTypes.number.isRequired,
};

export default FilmsList;
