import { useEffect, useState } from 'react';
import DataTable from '../../components/data-table/data-table';
import { classNames } from '../../functions/classNames';

/* eslint-disable-next-line */
export interface UsersProps {}

export interface User {
  name: string;
  title: string;
  email: string;
  role: string;
  department: string;
  image: string;
}

export function Users(props: UsersProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const people = [
      {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      // More people...
    ];
    setUsers(people);
  });
  return (
    <DataTable
      title="Users"
      description="A list of all the users in your account including their name, title, email and role."
      data={users}
      withCta
      withRowCta
      ctaLabel="Afegeix usuari"
      headers={['Name', 'Title', 'Status', 'Role']}
      itemTpl={(user: User) => (
        <tr key={user.email}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-gray-500">{user.email}</div>
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <div className="text-gray-900">{user.title}</div>
            <div className="text-gray-500">{user.department}</div>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
              Active
            </span>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {user.role}
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit<span className="sr-only">, {user.name}</span>
            </a>
          </td>
        </tr>
      )}
    />
  );
}

export default Users;
