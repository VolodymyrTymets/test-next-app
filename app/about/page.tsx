import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Next App - About page',
  description: 'About page',
};

export default function About() {
  return (
    <div className="container flex  flex-col justify-between p-2">
      <h1 className="h-1 text-2xl">This is test task on Next.js</h1>
    </div>
  );
}
