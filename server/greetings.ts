import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const greetingsRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.text}!`,
      };
    }),
});
