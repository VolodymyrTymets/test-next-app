import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

const typeClassMap = {
  primary:
    'text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600',
  secondary:
    'text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700',
};
export default function Button({
  onClick,
  type,
  children,
}: {
  onClick: () => void;
  type: 'primary' | 'secondary';
} & PropsWithChildren) {
  return (
    <button
      onClick={onClick}
      className={classNames(['w-1/2 px-5 py-2', typeClassMap[type]])}
    >
      {children}
    </button>
  );
}
