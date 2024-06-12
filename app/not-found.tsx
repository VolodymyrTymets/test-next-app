'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Button from '@/app/components/Button/Button';

export default function NotFound() {
  const router = useRouter();
  const onBack = useCallback(() => {
    router.back();
  }, [router]);
  const onHome = useCallback(() => {
    router.replace('/');
  }, [router]);
  return (
    <section className="w-full bg-white dark:bg-neutral-950">
      <div className="container flex justify-center items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We can’t find that page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Button type="secondary" onClick={onBack}>
              <span>Go back</span>
            </Button>

            <Button type="primary" onClick={onHome}>
              Take me home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
