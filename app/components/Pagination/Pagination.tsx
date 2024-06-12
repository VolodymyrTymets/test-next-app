import Link from 'next/link';
import classNames from 'classnames';

import ArrowLeftIcon from '@/app/components/icons/ArrowLeftIcon/ArrowLeftIcon';
import ArrowRightIcon from '@/app/components/icons/ArrowRightIcon/ArrowRightIcon';

const MAX_PAGES = 6;
const arrowButtonCass =
  'flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md  rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600';
const numberButtonClass =
  'hidden flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md md:inline rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600';
const activeClass =
  'hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200';
const inActiveClass = 'cursor-not-allowed';

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

  const all = Array.from({ length: pages })
    .map((_, i) => i)
    .slice(
      pages - currentPage >= MAX_PAGES ? currentPage - 1 : pages - MAX_PAGES,
      pages
    );
  const head = all.length > MAX_PAGES ? all.slice(0, MAX_PAGES / 2) : all;
  const tail =
    all.length > MAX_PAGES
      ? all.slice(all.length - MAX_PAGES / 2, all.length)
      : [];

  return (
    <div className="flex">
      <a
        href={`${path}?page=${currentPage - 1}`}
        className={classNames([
          'hidden md:inline',
          arrowButtonCass,
          currentPage === 1 ? inActiveClass : activeClass,
        ])}
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </a>
      <a
        href={path}
        className={classNames([
          'inline md:hidden',
          arrowButtonCass,
          currentPage === 1 ? inActiveClass : activeClass,
        ])}
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </a>

      {head.map(index => (
        <Link
          key={`${path}-${index}`}
          href={`${path}?page=${index + 1}`}
          className={classNames([
            numberButtonClass,
            currentPage === index + 1 ? inActiveClass : activeClass,
          ])}
        >
          {index + 1}
        </Link>
      ))}

      {tail.length ? (
        <Link
          href={`#`}
          className={classNames([numberButtonClass, inActiveClass])}
        >
          ...
        </Link>
      ) : null}

      {tail.map(index => (
        <Link
          key={`${path}-${index}`}
          href={`${path}?page=${index + 1}`}
          className={classNames([
            numberButtonClass,
            currentPage === index + 1 ? inActiveClass : activeClass,
          ])}
        >
          {index + 1}
        </Link>
      ))}

      <a
        href={`${path}?page=${pages}`}
        className={classNames([
          'hidden md:inline',
          arrowButtonCass,
          currentPage === pages ? inActiveClass : activeClass,
        ])}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </a>

      <a
        href={`${path}?page=${currentPage + 1}`}
        className={classNames([
          'inline md:hidden',
          arrowButtonCass,
          currentPage === pages ? inActiveClass : activeClass,
        ])}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </a>
    </div>
  );
}
