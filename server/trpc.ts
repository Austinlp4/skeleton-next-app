import { initTRPC } from '@trpc/server';
import { greetingsRouter } from './greetings';

const t = initTRPC.create();

export const appRouter = t.router({
  greetings: greetingsRouter,
});

export type AppRouter = typeof appRouter;
