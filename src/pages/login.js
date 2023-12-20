import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password == '') {
      setError('Please enter correct details!');
    } else {
      
      setError('Login successful');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-center">SE CONNECTER</h2>
                  <p className="text-center mb-4">Bienvenue!!</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                       Entrer votre mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                       
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                        Enter votre mot depasse
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="mb-3">
                      <Link to="/forgotpasword" className="form-link">
                       mot de passe oublié?
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className='m-0'>vous avez pas de compte</p>
                      <Link to="/signup" className="form-link">
                        Sign up
                      </Link>
                    </div>
                    <div className="sign">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;