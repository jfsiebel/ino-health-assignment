"use client";

import ExamsList from "./(components)/ExamsList";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center justify-between p-32">
      <ExamsList />
    </main>
  );
}
