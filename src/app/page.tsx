"use client";

import ExamsList from "./_components/ExamsList";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center p-32">
      <ExamsList />
    </main>
  );
}
