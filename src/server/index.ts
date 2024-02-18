import { createTRPCRouter, publicProcedure } from "@/server/lib/trpc";

export const appRouter = createTRPCRouter({
  helloWorld: publicProcedure.query(async () => {
    return `Hello World`;
  }),
});

export type AppRouter = typeof appRouter;
