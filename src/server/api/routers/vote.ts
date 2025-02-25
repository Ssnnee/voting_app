import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


const voteSchema = z.object({
  idCandidate: z.number(),
  idPoll: z.number(),
  idStudent: z.number(),
});

export const voteRouter = createTRPCRouter({

  create: publicProcedure
    .input(voteSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.vote.create({
        data: {
          candidateId: input.idCandidate,
          pollId: input.idPoll,
          studentId: input.idStudent,
        },
      });
    }),

  getVotesByCandidateId: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.vote.findMany({
        where: {
          candidateId: input.id,
        },
      });
    }),

  getStudentById: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.student.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
});
