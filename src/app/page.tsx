"use client";

import ExamsList from "./(components)/ExamsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ExamsList />
    </main>
  );
}
