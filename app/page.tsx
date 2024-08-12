'use client'
import { trpc } from '../utils/trpc';

const HomePage = () => {
  const { data, isLoading } = trpc.greetings.hello.useQuery({ text: 'world' });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className='text-info-500'>{data?.greeting}</div>;
};

export default HomePage;
