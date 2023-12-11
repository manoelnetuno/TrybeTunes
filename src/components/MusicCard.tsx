import React, { useState } from 'react';
import checkedHeart from '../images/checked_heart.png';
import emptyHeart from '../images/empty_heart.png';
import { SongType } from '../types';

function MusicCard({ trackName, previewUrl, trackId }: SongType) {
  const [Favorite, setFavorite] = useState(false);

  const handleCheckbox = () => {
    setFavorite(!Favorite);
  };
  return (
    <div>
      <h5>{trackName}</h5>
      <label data-testid={ `checkbox-music-${trackId}` }>
        <img src={ Favorite ? checkedHeart : emptyHeart } alt="favorite" />
        <input
          type="checkbox"
          checked={ Favorite }
          onChange={ handleCheckbox }
        />
        Marcar como favorita
      </label>
      <audio data-testid="audio-component" src={ previewUrl }>
        <track kind="captions" />
        O seu navegador não suporta o elemento
      </audio>
    </div>
  );
}

export default MusicCard;
