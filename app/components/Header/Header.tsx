'use client';
import Image from 'next/image';
import { SidebarContext } from '@/app/components/Sidebar/context';
import { useContext } from 'react';

export default function Header() {
  const { isOpen, toggleSidebarOpen } = useContext(SidebarContext);
  return (
    <header className="bg-white border-b rtb:border-r-0 rtb:border-l dark:bg-gray-900 dark:border-gray-700 fixed top-0 flex h-14 w-full flex-col justify-between px-2 py-2 z-10">
      <div className="flex justify-between">
        <Image
          className="relative dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleSidebarOpen}
            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            {!isOpen ? (
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
