import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
   
      setError('Signup successful');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-center">Sign Up</h2>
                  <p className="text-center mb-3">Rejoignez-nous pour faire du shopping !!</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                        Entrer votre adresse email
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
                        Entrer votre mot de passe
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
                    <div className="mb-3">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label mb-3"
                      >
                        Confirmer votre mot de passe
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="rewrite password here..."
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                        required/>
                    </div>
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p>
                        vous avez un compte?
                      </p>
                      <Link to="/login" className="form-link">
                        Log In
                      </Link>
                    </div>
                    <div className="sign">
                      <button type="submit">Sign Up</button>
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

export default Signup;