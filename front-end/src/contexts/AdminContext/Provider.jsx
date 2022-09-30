import propTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import AdminContext from '.';
import { getAPI } from '../../Services/request';

export default function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [createUserError, updateUserError] = useState(false);

  const refreshUsers = () => {
    getAPI('admin/users', true).then((serverUsers) => setUsers(serverUsers));
  };

  const setCreateUserError = () => {
    updateUserError(true);
  };

  const clearCreateUserError = () => {
    updateUserError(false);
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  const contextValue = useMemo(() => ({
    users,
    createUserError,
    refreshUsers,
    setCreateUserError,
    clearCreateUserError,
  }), [users, createUserError]);

  return (
    <AdminContext.Provider value={ contextValue }>
      {children}
    </AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: propTypes.node.isRequired,
};
