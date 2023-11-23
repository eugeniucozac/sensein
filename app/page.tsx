import Table from './components/Table';
import Chart from './components/Chart';

async function getTKs() {
  const res = await import("../app/api/tk/route");
  return await (await res.GET()).json();
}

export default async function Home() {
  const tks = await getTKs();

  return (
    <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <Table tks={tks} />
      <Chart tks={tks} />
    </section>
  );
}

export const dynamic = 'force-dynamic'; 