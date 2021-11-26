import '../styles/navbar.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const history = useHistory();
  const [state, updateState] = useState<number>(0);

  const getClass = (path: string) => {
    return window.location.pathname === path ? 'active' : '';
  };

  const redirect = (path: string) => {
    history.push(path);

    // for rerendering purposes
    updateState(state + 1);
  };

  return (
    <div className="navbar">
      <div
        className={`link-box ${getClass('/home')}`}
        onClick={() => redirect('/home')}
      >
        Home
      </div>
      <div
        className={`link-box ${getClass('/all-counts')}`}
        onClick={() => redirect('/all-counts')}
      >
        Personen Verlauf
      </div>
      <div
        className={`link-box ${getClass('/all-vaccines')}`}
        onClick={() => redirect('/all-vaccines')}
      >
        Alle Impfungen
      </div>
      <div
        className={`link-box ${getClass('/counts')}`}
        onClick={() => redirect('/counts')}
      >
        Personen
      </div>
      <div
        className={`link-box ${getClass('/vaccines')}`}
        onClick={() => redirect('/vaccines')}
      >
        Impfungen
      </div>
    </div>
  );
};

export default Navbar;
