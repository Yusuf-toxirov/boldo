import React from 'react';

const Login = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#0a192f',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3CB371',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1>Log in to Boldo</h1>
      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={buttonStyle}>Log in</button>
    </div>
  );
};

export default Login;