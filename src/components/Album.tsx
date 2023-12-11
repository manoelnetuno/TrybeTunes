// Album.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../types';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [musics, setMusics] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ObterMusica = async () => {
      if (!id) {
        throw new Error('ID do álbum é indefinido');
      }
      setLoading(true);
      const [albumData, ...songs] = await getMusics(id);
      setAlbum(albumData);
      setMusics(songs);

      setLoading(false);
    };

    ObterMusica();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <h2 data-testid="artist-name">{album?.artistName}</h2>
          <h3 data-testid="album-name">
            Album:
            {' '}
            {album?.collectionName}
          </h3>
          <ul>
            {musics.map((music) => (
              <li key={ music.trackId }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Album;
