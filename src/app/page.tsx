"use client";

import { trpc } from "./(trpc)/client";

export default function Home() {
  const hello = trpc.helloWorld.useQuery();
  const mockData = trpc.fetchMockData.useQuery({ qty: 3 });

  console.log(mockData.data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
      <pre>{hello.data}</pre>
    </main>
  );
}
