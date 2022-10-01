import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../../Services/request';
/* import savLocalStorage from '../../helper/savLocalStorage'; */

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /*   const [setName] = useContext(AppContext); */
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const Navigate = useNavigate();
  const REGEX_EMAIL = /\S+@\S+\.\S+/;

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token, role } = await requestLogin({ email, password });
      console.log(token);
      // setToken(token);
      // const { role } = await requestData('/login/validate', { email, password });
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      /*       setName(response.data.name);
      savLocalStorage('user', response.data); */
      setIsLogged(true);
      Navigate('/consumer/products');
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  const paddingValidater = () => {
    const testEmail = REGEX_EMAIL.test(email);
    const a = 4;

    if (testEmail && password.length > a) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const handleValidEmail = (value) => {
    setEmail(value);
    paddingValidater();
  };

  const handleValidPassword = (value) => {
    setPassword(value);
    paddingValidater();
  };
  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) {
    Navigate('/consumer/products');
  } else {
    return (
      <div>
        <form>
          <label htmlFor="email-user">
            Login:
            <input
              data-testid="common_login__input-email"
              onChange={ (e) => handleValidEmail(e.target.value) }
            />
          </label>
          <label htmlFor="email-user">
            Password:
            <input
              data-testid="common_login__input-password"
              onChange={ (e) => handleValidPassword(e.target.value) }
            />
          </label>
          {
            (failedTryLogin)
              ? (
                <p data-testid="common_login__element-invalid-email">
                  {
                    `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                  }
                </p>
              )
              : null
          }
          <button
            type="submit"
            disabled={ isDisabled }
            onClick={ (e) => login(e) }
            data-testid="common_login__button-login"
            //  onClick={ (e) => {
            //    e.preventDefault();
            //  </form>  createPost(loginEmail, password)
            //      .then((data) => {
            //        navigate('/customer/products');
            //        localStorage.setItem('user', JSON.stringify(data));
            //  });
          >
            Login
          </button>
          <button
            type="button"
            onClick={ () => Navigate('/register') }
            data-testid="common_login__button-register"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
