import propTypes from 'prop-types';
import Button from './Button';
import UserInfo from './UserInfo';

export default function Header({ type }) {
  return (
    <header>
      <nav>
        {type === 'ADM'
          ? (
            <Button
              innerText="GERENCIAR USUÁRIOS"
              testId="customer_products__element-navbar-link-orders"
            />
          )
          : (
            <>
              <Button
                innerText="PRODUTOS"
                testId="customer_products__element-navbar-link-products"
              />
              <Button
                innerText="MEUS PEDIDOS"
                testId="customer_products__element-navbar-link-orders"
              />
            </>
          )}
        <UserInfo testId="customer_products__element-navbar-user-full-name" />
        <Button
          innerText="Sair"
          testId="customer_products__element-navbar-link-logout"
        />
      </nav>
    </header>
  );
}

Header.propTypes = {
  type: propTypes.string.isRequired,
};
