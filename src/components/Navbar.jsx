import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#0a192f',
    color: '#fff',
    padding: '10px 0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#fff',
    textDecoration: 'none',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  };

  const loginButtonStyle = {
    padding: '8px 20px',
    backgroundColor: '#fff',
    color: '#0a192f',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Логотип */}
        <Link to="/" style={logoStyle}>
          <span style={{ marginRight: '10px', fontSize: '28px', color: '#3CB371' }}>B</span>
          Boldo
        </Link>

        {/* Ссылки */}
        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/product" style={linkStyle}>Product</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          {/* Кнопка Log in */}
          <Link to="/login" style={loginButtonStyle}>Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
