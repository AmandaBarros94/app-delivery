// import { useContext } from 'react';
// import AdminContext from '../contexts/AdminContext';
// import { deleteAPI } from '../Services/request';
// import Button from './Button';

// export default function UsersTable() {
//   const { users, refreshUsers } = useContext(AdminContext);

//   const deleteUser = async (id) => {
//     await deleteAPI('admin/users', id, true);
//     refreshUsers();
//   };

//   return (
//     <table>
//       <caption>Lista de usuários</caption>
//       <thead>
//         <tr>
//           <th>Item</th>
//           <th>Nome</th>
//           <th>E-mail</th>
//           <th>Tipo</th>
//           <th>Excluir</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(({ id, name, email, role }, index) => (
//           <tr key={ id }>
//             <td
//               data-testid={ `admin_manage__element-user-table-item-number-${index}` }
//             >
//               {index + 1}
//             </td>
//             <td
//               data-testid={ `admin_manage__element-user-table-name-${index}` }
//             >
//               {name}
//             </td>
//             <td
//               data-testid={ `admin_manage__element-user-table-email-${index}` }
//             >
//               {email}
//             </td>
//             <td
//               data-testid={ `admin_manage__element-user-table-role-${index}` }
//             >
//               {role}
//             </td>
//             <td>
//               <Button
//                 innerText="Excluir"
//                 testId={ `admin_manage__element-user-table-remove-${index}` }
//                 action={ () => deleteUser(id) }
//               />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
