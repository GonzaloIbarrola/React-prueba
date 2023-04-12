export function decrementar(counter, setCounter) {
  const nuevoResultado = counter - 1;
  setCounter(nuevoResultado);
}

export function incrementar(counter, setCounter) {
  const nuevoResultado = counter + 1;
  setCounter(nuevoResultado);
}

export function reset(setCounter) {
  setCounter(0);
}
