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
  const mockData = await fetch(process.env.MOCK_DATA_URL);
  const response = await mockData.json();

  console.log("Saving response to database");
  for (const exam of response) {

    await prisma.exam.create({
      data: examDTO,
    });
  }
  console.log("end of init function");
}

init();

export type AppRouter = typeof appRouter;
