import { useContext } from 'react';
import {
  CreateUserForm,
  Header,
  UsersTable,
  ErrorModal,
} from '../components';
import AdminContext from '../contexts/AdminContext';
import errorMsgs from '../utils/errorMsgs';

export default function Administrator() {
  const { createUserError } = useContext(AdminContext);
  return (
    <>
      <Header type="ADM" />
      <section>
        <CreateUserForm />
      </section>
      <main>
        <UsersTable />
      </main>
      {createUserError && <ErrorModal errorMsg={ errorMsgs.createUserConflict } /> }
    </>
  );
}
