import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postCreate, setToken } from '../../Services/request';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [btnCreate] = useState([true, true, true]);
  const [isDisabled, setIsDisabled] = useState(true);
  const Navigate = useHistory();

  const createUser = async (event) => {
    event.preventDefault();

    try {
      const body = {
        name,
        email,
        password,
      };

      const user = await postCreate(body);
      setToken(user.token);

      // const user = await requestUserByEmail(`/user/${email}`);

      localStorage.setItem('user', JSON.stringify({
        name: user.name,
        email: user.email,
        role: user.role,
        token: user.token,
      }));

      setIsCreate(true);
    } catch (error) {
      console.error(error.message);
      setFailedTryCreate(true);
      setIsCreate(false);
    }
  };

  const validateName = async (value) => {
    const NUMBER_OF_LETTERS = 12;
    if (value.length >= NUMBER_OF_LETTERS) {
      btnCreate[2] = false;
      // Adicionar verificações CSS Email
    } else {
      btnCreate[2] = true;
    // Adicionar verificações CSS Email
    }
  };

  const validateEmail = async (value) => {
    const REGEX_EMAIL = /\S+@\S+\.\S+/;
    if (REGEX_EMAIL.test(value)) {
      btnCreate[0] = false;
      // Adicionar verificações CSS Email
    } else {
      btnCreate[0] = true;
    // Adicionar verificações CSS Email
    }
  };

  const validatePassword = (value) => {
    const NUMBER_OF_LETTERS = 5;
    if (value.length > NUMBER_OF_LETTERS) {
      // Adicionar verificações CSS Senha
      btnCreate[1] = false;
    } else {
      btnCreate[1] = true;
    // Adicionar verificações CSS Senha
    }
  };

  const verifyDisabled = async () => {
    console.log(btnCreate[2]);
    if (btnCreate[0] === false && btnCreate[1] === false && btnCreate[2] === false) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const verifyName = (value) => {
    validateName(value);
    verifyDisabled();
  };

  const verifyEmail = (value) => {
    validateEmail(value);
    verifyDisabled();
    setFailedTryCreate(false);
  };

  const verifyPassword = (value) => {
    validatePassword(value);
    verifyDisabled();
  };

  if (isCreate) {
    Navigate.push('/customer/products');
    return null;
  }
  return (
    <form>
      <label htmlFor="name-input">
        Nome:
        <input
          type="text"
          onChange={ (e) => verifyName(e.target.value) }
          onBlur={ (e) => setName(e.target.value) }
          placeholder="Nome"
          name="name"
          data-testid="common_register__input-name"
        />
      </label>
      <label htmlFor="email-input">
        Email:
        <input
          type="text"
          onChange={ (e) => verifyEmail(e.target.value) }
          onBlur={ (e) => setEmail(e.target.value) }
          placeholder="me@example.com"
          name="email"
          data-testid="common_register__input-email"
        />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input
          type="password"
          onChange={ (e) => verifyPassword(e.target.value) }
          onBlur={ (e) => setPassword(e.target.value) }
          name="password"
          data-testid="common_register__input-password"
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="submit"
        onClick={ (event) => createUser(event) }
        disabled={ isDisabled }
      >
        Cadastrar
      </button>
      {
        (failedTryCreate)
          ? (
            <p data-testid="common_register__element-invalid_register">
              {
                `email já utilizado em uma outra conta,
                Pro favor, verifique os dados`
              }
            </p>
          )
          : null
      }
    </form>
  );
}

export default Register;
