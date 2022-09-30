import StatusCode from 'http-status-codes';
import { useContext, useEffect, useState } from 'react';
import AdminContext from '../contexts/AdminContext';
import { postAPI } from '../Services/request';
import validateUserForm from '../utils/validateUserForm';
import Button from './Button';

export default function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitEnabled, enableSubmit] = useState(false);

  useEffect(() => {
    enableSubmit(validateUserForm({ name, email, password, role }));
  }, [name, email, password, role]);

  const { refreshUsers, setCreateUserError } = useContext(AdminContext);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
  };

  const createUser = async (event) => {
    event.preventDefault();
    const creationResponse = await postAPI(
      'admin/users',
      { name, email, password, role },
      true,
    );
    if (creationResponse.errorCode === StatusCode.CONFLICT) {
      setCreateUserError();
    } else {
      refreshUsers();
    }
    resetForm();
  };

  return (
    <form onSubmit={ createUser }>
      <fieldset>
        <legend>Cadastrar novo usuário</legend>
      </fieldset>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          value={ name }
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          value={ email }
          placeholder="seu-email@site.com.br"
          data-testid="admin_manage__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          value={ password }
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </label>
      <label htmlFor="role">
        Tipo
        <select
          id="role"
          value={ role }
          data-testid="admin_manage__button-register"
          onChange={ ({ target: { value } }) => setRole(value) }
        >
          <option>Selecione o tipo</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Usuário</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <Button
        buttonType="submit"
        innerText="CADASTRAR"
        testId="admin_manage__button-register"
        disabled={ !isSubmitEnabled }
      />
    </form>
  );
}
