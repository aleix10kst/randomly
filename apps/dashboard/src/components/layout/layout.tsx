import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LocationMarkerIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ESTABLISHMENTS_ROUTE,
  HOME_ROUTE,
  USERS_ROUTE,
} from '../../constants/routes.constants';
import { NavigationLink } from '../../types/navigation-link.type';
import Sidebar from '../sidebar/sidebar';

const navigation: NavigationLink[] = [
  { name: 'Dashboard', href: HOME_ROUTE, icon: HomeIcon, current: true },
  { name: 'Usuaris', href: USERS_ROUTE, icon: UsersIcon, current: false },
  {
    name: 'Locals',
    href: ESTABLISHMENTS_ROUTE,
    icon: LocationMarkerIcon,
    current: false,
  },
  { name: 'Calendar', href: 'calendar', icon: CalendarIcon, current: false },
  { name: 'Documents', href: 'documents', icon: InboxIcon, current: false },
  { name: 'Reports', href: 'reports', icon: ChartBarIcon, current: false },
];

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Sidebar
          navigation={navigation}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  <Outlet />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
