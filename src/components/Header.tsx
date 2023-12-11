import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregamessage from './Message';

function Header() {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ObterUser = async () => {
      const user = await getUser();
      setUserName(user.name);
      setLoading(false);
    };
    ObterUser();
  }, []);
  return (

    <header data-testid="header-component">
      {loading ? (
        <Carregamessage />
      ) : (
        <div>
          <nav>
            <NavLink to="/search" data-testid="link-to-search">
              Search
            </NavLink>
            <NavLink to="/favorites" data-testid="link-to-favorites">
              Favorites
            </NavLink>
            <NavLink to="/profile" data-testid="link-to-profile">
              Profile
            </NavLink>
          </nav>
          <div>
            {userName && (
              <p data-testid="header-user-name">
                Logged in as:
                {' '}
                {userName}
              </p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
