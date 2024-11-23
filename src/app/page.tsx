import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Fingerprint } from '@/components/Fingerprint';
import { get } from '@/utils/counter';

export const revalidate = 600; // 10 minutes

export default async function Home() {
  const entries = await get();
  return (
    <>
      <div className='flex flex-col gap-8 mx-auto w-[80%] mt-20'>
        <h1 className='text-center text-6xl'>
          Hello... nothing to see here yet.
        </h1>
        <h2 className='text-center text-4xl '>Some statistics:</h2>
        <div className={'grid grid-cols-2 w-fit gap-x-8 self-center text-2xl'}>
          <p>Visitors today:</p>
          <AnimatedCounter count={entries.today} delay={2000} />
          <p>Visitors this month:</p>
          <AnimatedCounter count={entries.month} delay={4000} />
          <p>Visitors this year:</p>
          <AnimatedCounter count={entries.year} delay={6000} />
        </div>
      </div>
      <Fingerprint />
    </>
  );
}
