import type { ItemType } from '@/app/types/item';
import Image from 'next/image';
import Link from 'next/link';

export default async function ItemCard({ item }: { item: ItemType }) {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image
        className="object-cover w-full h-64"
        src={item.image.thumbnailUrl}
        alt="Article"
        sizes="100vw"
        width={300}
        height={400}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />

      <div className="p-6">
        <div>
          <Link
            href={`/items/${item._id}`}
            className="mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            role="link"
          >
            {item.title}
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {item.description}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                className="object-cover h-10 rounded-full"
                src={item.createdBy.avatar.thumbnailUrl}
                width={40}
                height={10}
                alt="Avatar"
              />
              <Link
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                role="link"
              >
                {item.createdBy.firstName} {item.createdBy.lastName}
              </Link>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {`${new Date(item.createdAt).getDay()} / ${new Date(item.createdAt).getMonth()} / ${new Date(item.createdAt).getFullYear()}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
