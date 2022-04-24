import { Label } from '@headlessui/react/dist/components/label/label';
import { ReactNode } from 'react';
import { classNames } from '../../functions/classNames';
import { User } from '../../pages/users/users';

export interface TableDataProps {
  title: string;
  description: string;
  withCta?: boolean;
  withRowCta?: boolean;
  ctaLabel?: string;
  headers: string[];
  data: User[];
  itemTpl: (item: User, idx: number) => ReactNode;
}

export function TableData({
  title,
  description,
  withCta,
  withRowCta,
  ctaLabel,
  headers,
  data,
  itemTpl,
}: TableDataProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        {withCta && (
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              {ctaLabel}
            </button>
          </div>
        )}
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header, headerIdx) => (
                      <th
                        key={headerIdx}
                        className={classNames(
                          'px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
                          headerIdx === 0 ? 'pl-4 sm:pl-6' : ''
                        )}
                      >
                        {header}
                      </th>
                    ))}
                    {withRowCta && (
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((row, idx) => itemTpl(row, idx))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableData;
