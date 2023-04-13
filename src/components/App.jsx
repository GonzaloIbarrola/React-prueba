import { useState } from 'react';
import MeGusta from './MeGusta';
import ActionBtn from './ActionBtn/ActionBtn';
import DecrementSvg from './ActionBtn/DecrementSvg';
import IncrementSvg from './ActionBtn/IncrementSvg';
import ResetSvg from './ActionBtn/ResetSvg';
import { decrementar, incrementar, reset } from './ActionBtn/actions.helper';

function App() {
  const [like, setLike] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <article className='bg-black/10 w-3/6 w- h-3/6'>
      <div className='w-full h-full flex items-center text-white/80 border-green-600 rounded-3xl border-2 font-bold shadow-lg shadow-green-600/20 hover:shadow-green-600/50'>
        <section className='flex-1 text-center xl:text-[180px] text-[120px]'>
          {counter}
        </section>
        <section className='w-2/5 flex h-full items-center flex-col justify-around text-green-600'>
          <ActionBtn action={() => incrementar(counter, setCounter)}>
            <IncrementSvg />
          </ActionBtn>
          <ActionBtn action={() => decrementar(counter, setCounter)}>
            <DecrementSvg />
          </ActionBtn>
          <ActionBtn action={() => reset(setCounter)}>
            <ResetSvg />
          </ActionBtn>
        </section>
      </div>
      <MeGusta like={like} setLike={setLike} />
    </article>
  );
}

export default App;
