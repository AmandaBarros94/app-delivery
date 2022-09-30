import propTypes from 'prop-types';
import { useMemo, useState } from 'react';
import UserContext from '.';

export default function UserProvider({ children }) {
  const [role] = useState('');

  const contextValue = useMemo(() => ({
    role,
  }), [role]);

  return (
    <UserContext.Provider value={ contextValue }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};
