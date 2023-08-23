import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const { state } = useLocation();
  const navigate = useNavigate();
  
  console.log(state);

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <>
      <header>
        <h1>
          <Link to='/'>EnerClic</Link>
        </h1>
        {/* Si hay un usuario conectado el logged es true por ello devuelve el <div> de lo contrario el <nav> */}
        {state?.logged ? (
          <div className="user-login">
            <span className="username-login">{state?.name}</span>
            <button className="btn-logout-login" onClick={onLogout}>Cerrar sesion</button>
          </div>
        ) : (
          <nav>
            <Link to='/login'>Iniciar sesión</Link>
          </nav>
        )}    
      </header>

      <Outlet />
    </>
  );
};
