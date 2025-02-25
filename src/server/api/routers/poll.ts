import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pollRouter = createTRPCRouter({
  getLatest: publicProcedure.query(async ({ ctx }) => {
    const poll = await ctx.db.poll.findFirst({
      orderBy: { createdAt: "desc" },
    });
    return poll ?? null;
  }),

});
