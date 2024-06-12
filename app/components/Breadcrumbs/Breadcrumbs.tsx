import Link from 'next/link';
import HomeIcon from '@/app/components/icons/HomeIcon/HomeIcon';
export default async function Breadcrumbs({
  items = [],
}: {
  items?: Array<{ link?: string; title: string }>;
}) {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="text-gray-600 dark:text-gray-200">
        <HomeIcon className="w-5 h-5" />
      </Link>

      {items.map(({ link, title }) => (
        <>
          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>
          {link ? (
            <Link
              href={link}
              className="text-gray-600 dark:text-gray-200 hover:underline"
            >
              {title}
            </Link>
          ) : (
            <p className="text-gray-400 dark:text-gray-100">{title}</p>
          )}
        </>
      ))}
    </div>
  );
}
