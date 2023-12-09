import React from 'react';

type MusicCardProps = {
  trackName: string;
  previewUrl: string;
};

function MusicCard({ trackName, previewUrl }: MusicCardProps) {
  return (
    <div>
      <h5>{trackName}</h5>
      <audio data-testid="audio-component" src={ previewUrl }>
        <track kind="captions" />
        O seu navegador não suporta o elemento
      </audio>
    </div>
  );
}

export default MusicCard;
