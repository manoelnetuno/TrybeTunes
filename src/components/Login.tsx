import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carregamessage from './Message';
import { createUser } from '../services/userAPI';

type LoginProps = {
  onSubmit: (name: string) => void;
};

function Login({ onSubmit }: LoginProps) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      await createUser({ name });
      onSubmit(name);
      navigate('/search');
    } catch (error) {
      console.error('Erro ao salvar o nome:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Carregamessage />}
      <form onSubmit={ handleSubmit }>
        <label htmlFor="login-name-input">Nome:</label>
        <input
          type="text"
          id="login-name-input"
          data-testid="login-name-input"
          value={ name }
          onChange={ handleNameChange }
        />
        <button
          type="submit"
          id="login-submit-button"
          data-testid="login-submit-button"
          disabled={ name.length < 3 || loading }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
