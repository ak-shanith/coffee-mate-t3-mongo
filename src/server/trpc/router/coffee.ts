import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const coffeeRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        roast: z.string(),
        maker: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const coffee: any = input;
      coffee.userId = ctx.session.user.id;
      return ctx.prisma.coffee.create({ data: input });
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.coffee.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    // return ctx.prisma.coffee.findMany();
  }),
});
