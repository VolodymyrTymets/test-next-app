import { getItems } from '@/app/utils/getItems';
import ItemsList from '@/app/items/components/ItemsList/ItemsList';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Pagination from '@/app/components/Pagination/Pagination';

const PER_PAGE = 9;
export default async function Items({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const { page: pageParam = '1' } = searchParams;
  const page = parseInt(pageParam) || 1;
  const { items, totalCount } = await getItems(
    (page - 1) * PER_PAGE,
    PER_PAGE * page
  );
  return (
    <div className="flex flex-col p-4">
      <div className="flex">
        <Breadcrumbs items={[{ title: 'Items' }]} />
      </div>
      <div className="flex">
        <h1 className="w-full text-2xl">Items</h1>
      </div>
      <div className="flex mt-4">
        <ItemsList items={items} />
      </div>
      <div className="flex mt-4 justify-center">
        <Pagination
          path={'/items'}
          paginationOptions={{
            perPage: PER_PAGE,
            currentPage: page || 1,
            totalCount,
          }}
        />
      </div>
    </div>
  );
}
