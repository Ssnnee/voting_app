import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { studentRouter } from "./routers/student";
import { pollRouter } from "./routers/poll";
import { voteRouter } from "./routers/vote";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  student: studentRouter,
  poll: pollRouter,
  vote: voteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
