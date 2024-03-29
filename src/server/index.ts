import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/lib/trpc";
import { ExamRepository } from "./repositories/ExamRepository";

export const appRouter = createTRPCRouter({
  refreshMockData: publicProcedure.mutation(async () => {
    const mockData = await fetch(
      "https://mockapi-furw4tenlq-ez.a.run.app/data"
    );
    const response = await mockData.json();

    const repository = new ExamRepository();
    for (const exam of response) {
      await repository.create(exam);
    }
  }),

  fetchMockData: publicProcedure
    .input(
      z.object({
        qty: z.coerce.number().optional().default(10),
      })
    )
    .query(async ({ input }) => {
      const repository = new ExamRepository();

      const { exams } = await repository.find(input.qty!);

      return exams;
    }),
});

export type AppRouter = typeof appRouter;
