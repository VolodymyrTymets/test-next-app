import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Next App - Dashboard',
  description: 'Dashboard of  app',
};

export default function Home() {
  return (
    <div className="container flex  flex-col justify-between p-2">
      <h1 className="h-1 text-2xl">Hello, </h1>
    </div>
  );
}
