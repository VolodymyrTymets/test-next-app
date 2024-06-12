'use client';
import { useContext } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ListIcon from '@/app/components/icons/ListIcon/ListIcon';
import UserIcon from '@/app/components/icons/UserIcon/UserIcon';
import FolderIcon from '@/app/components/icons/FolderIcon/FolderIcon';
import { SidebarContext } from '@/app/components/Sidebar/context';

export default function Sidebar() {
  const { isOpen } = useContext(SidebarContext);
  const pathname = usePathname();
  return (
    <aside
      className={classNames([
        'max-md:w-full  h-full  overflow-y-auto',
        !isOpen ? 'max-md:hidden' : 'fixed',
      ])}
      style={{ gridArea: 'sidebar' }}
    >
      <div className="px-4 py-8 flex-col min-w-[250px] h-full max-md:w-full fixed bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              className={classNames([
                'flex items-center px-4 py-2',
                pathname === '/'
                  ? 'text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200'
                  : 'text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
              ])}
              href="/"
            >
              <FolderIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Dashboard</span>
            </Link>

            <Link
              className={classNames([
                'flex items-center px-4 py-2 mt-5',
                pathname === '/items'
                  ? 'text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200'
                  : 'text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
              ])}
              href="/items"
            >
              <ListIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Items</span>
            </Link>
            <Link
              className={classNames([
                'flex items-center px-4 py-2 mt-5',
                pathname === '/about'
                  ? 'text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200'
                  : 'text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
              ])}
              href="/about"
            >
              <UserIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">About</span>
            </Link>

            <hr className="my-6 border-gray-200 dark:border-gray-600" />
          </nav>
        </div>
      </div>
    </aside>
  );
}
