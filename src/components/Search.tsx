import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregamessage from './Message';
import { AlbumType } from '../types';

function Search() {
  const [artistName, setArtistName] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [albumList, setAlbumList] = useState<AlbumType[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const result = await searchAlbumsAPI(artistName);
    setAlbumList(result);
    if (result.length === 0) {
      setResultMessage('Nenhum álbum foi encontrado');
    } else {
      setResultMessage(`Resultado de álbuns de: ${artistName}`);
    }
    console.log('Resultado da API:', result);
    setLoading(false);
    setArtistName('');
  };

  return (
    <div>
      <form>
        <label htmlFor="search-artist-input">Artista ou Banda:</label>
        <input
          type="text"
          id="search-artist-input"
          data-testid="search-artist-input"
          value={ artistName }
          onChange={ handleInputChange }
        />
        <button
          type="button"
          onClick={ handleSearch }
          data-testid="search-artist-button"
          disabled={ artistName.length < 2 || loading }
        >
          {loading ? <Carregamessage /> : 'Pesquisar'}
        </button>
      </form>
      {resultMessage && <p>{resultMessage}</p>}
      {albumList.map((album) => (
        <div key={ album.collectionId }>
          <p>
            Album:
            {' '}
            {album.collectionName}
          </p>
          <Link
            to={ `/album/${album.collectionId}` }
            data-testid={ `link-to-album-${album.collectionId}` }
          >
            Ver detalhes do álbum
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Search;
