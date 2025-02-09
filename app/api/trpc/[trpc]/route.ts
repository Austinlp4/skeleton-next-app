import { appRouter } from '../../../../server/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
