import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { EmailInput, PasswordInput } from '../components/Inputs';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import loginUser from '../utils/api/requests/loginUser';
import setStorage from '../utils/handleStorage/setStorage';
import ClientContext from '../context/client/ClienteContext';
import getStorage from '../utils/handleStorage/getStorage';

function Login() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const {
    setClient,
    customerLoggedStatus,
    setCustomerLoggedStatus,
    sellerLoggedStatus,
    setSellerLoggedStatus,
  } = useContext(ClientContext);

  useEffect(() => {
    const data = getStorage('user');

    if (data?.token && data?.role === 'customer') {
      navigate('/customer/products');
    }
  });

  const form = useForm({ mode: 'onChange' });

  const { isValid } = form.formState;

  const formSubmitFunction = async (userInfos) => {
    try {
      const { data } = await loginUser(userInfos);
      setStorage('user', data);
      setClient({ ...data });

      if (data.role === 'customer') {
        setCustomerLoggedStatus(true);
      }
      if (data.role === 'seller') {
        setSellerLoggedStatus(true);
      }
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };

  if (customerLoggedStatus) {
    return <Navigate to="/customer/products" />;
  }
  if (sellerLoggedStatus) {
    return <Navigate to="/seller/orders" />;
  }

  return (
    <>
      <form onSubmit={ form.handleSubmit(formSubmitFunction) }>
        <EmailInput
          dataId="common_login__input-email"
          handleForm={ form }
        />

        <PasswordInput
          dataId="common_login__input-password"
          handleForm={ form }
        />

        <PrimaryButton
          isSubmit
          text="Login"
          disable={ !isValid }
          dataId="common_login__button-login"
        />
        <PrimaryButton
          isSubmit={ false }
          text="Sign up"
          disable={ false }
          dataId="common_login__button-register"
          onClick={ () => navigate('/register') }
        />
      </form>
      <div>
        { errorMessage.length > 0
          && <p data-testid="common_login__element-invalid-email">{ errorMessage }</p> }
      </div>
    </>

  );
}

export default Login;
