import Link from 'next/link';
import classNames from 'classnames';

import ArrowLeftIcon from '@/app/components/icons/ArrowLeftIcon/ArrowLeftIcon';
import ArrowRightIcon from '@/app/components/icons/ArrowRightIcon/ArrowRightIcon';
export default function Pagination({
  path,
  paginationOptions,
}: {
  path: string;
  paginationOptions: {
    totalCount: number;
    perPage: number;
    currentPage: number;
  };
}) {
  const { totalCount, perPage, currentPage } = paginationOptions;
  const pages = Math.ceil(totalCount / perPage);
  const active =
    'hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200';
  const inActive = 'cursor-not-allowed';

  return (
    <div className="flex">
      <a
        href={`${path}?page=${currentPage - 1}`}
        className={classNames([
          'inline flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md md:hidden rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600',
          currentPage === 1 ? inActive : active,
        ])}
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </a>
      <a
        href={path}
        className={classNames([
          'hidden flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md md:inline rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600',
          currentPage === 1 ? inActive : active,
        ])}
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </a>

      {Array.from({ length: pages }).map((_, index) => (
        <Link
          key={`${path}-${index}`}
          href={`${path}?page=${index + 1}`}
          className={classNames([
            'hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md md:inline dark:bg-gray-800 dark:text-gray-200',
            currentPage === index + 1 ? inActive : active,
          ])}
        >
          {index + 1}
        </Link>
      ))}

      <a
        href={`${path}?page=${pages}`}
        className={classNames([
          'hidden flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md md:inline rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600',
          currentPage === pages ? inActive : active,
        ])}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </a>

      <a
        href={`${path}?page=${currentPage + 1}`}
        className={classNames([
          'inline flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md md:hidden rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600',
          currentPage === pages ? inActive : active,
        ])}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </a>
    </div>
  );
}
