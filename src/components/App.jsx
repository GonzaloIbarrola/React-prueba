import { useState } from "react";
import MeGusta from "./MeGusta";
import { Plus , Minus , Reset } from "./Buttons";

function App() {
  const [like, setLike] = useState(true);
  const [counter, setCounter] = useState(0);
  const [likeColor, setColor] = useState('bg-green-600');

  return (
    <article className="bg-black/10 w-3/6 w- h-3/6">
      <div className="w-full h-full flex items-center text-white/80 border-green-600 rounded-3xl border-2 font-bold shadow-lg shadow-green-600/20 hover:shadow-green-600/50">
        <section className="flex-1 text-center xl:text-[180px] text-[120px]">
          {counter}
        </section>
        <section className="w-2/5 flex h-full items-center flex-col justify-around text-green-600">
          <Plus counter={counter} setCounter={setCounter} />
          <Minus counter={counter} setCounter={setCounter} />
          <Reset setCounter={setCounter} />
        </section>
      </div>
      <MeGusta like={like} setLike={setLike} likeColor={likeColor} setColor={setColor}/>
    </article>
  )
}

export default App;