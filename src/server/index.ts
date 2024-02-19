import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/lib/trpc";
import { ExamRepository } from "./repositories/ExamRepository";

export const appRouter = createTRPCRouter({
  helloWorld: publicProcedure.query(async () => {
    return `Hello World`;
  }),

  fetchMockData: publicProcedure
    .input(
      z.object({
        qty: z.coerce.number().nullable().default(10),
      })
    )
    .query(async ({ input }) => {
      const repository = new ExamRepository();

      const { exams } = await repository.find(input.qty!);

      return exams;
    }),
});

async function init() {
  console.log("Calling init function");
  const mockData = await fetch("https://mockapi-furw4tenlq-ez.a.run.app/data");
  const response = await mockData.json();

  const repository = new ExamRepository();

  console.log("Saving response to database");
  for (const exam of response) {
    await repository.create(exam);
  }
  console.log("end of init function");
}

init();

export type AppRouter = typeof appRouter;
