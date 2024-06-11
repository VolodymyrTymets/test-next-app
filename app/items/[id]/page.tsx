import { getItem } from '@/app/utils/getItems';
import Image from 'next/image';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
export default async function Item({ params }: { params: { id: string } }) {
  const item = await getItem(params.id);
  return (
    <div className="flex flex-col p-4">
      <div className="flex">
        <Breadcrumbs
          items={[{ title: 'Items', link: '/items' }, { title: item.title }]}
        />
      </div>
      <div className="flex">
        <h1 className="w-full text-2xl">{item.title}</h1>
      </div>
      <div className="flex mt-2">
        <Image
          className="rounded-md"
          src={item.image.originUrl}
          alt="Article"
          width={786}
          height={640}
        />
      </div>
      <div className="flex mt-4">
        <p>{item.description}</p>
      </div>
    </div>
  );
}
