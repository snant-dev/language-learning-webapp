export const Card = () => {
  return (
    <div className="flow-root rounded border bg-white px-20 py-16 shadow">
      <p className="mb-4 text-center text-3xl font-bold">Word</p>
      <p className="mb-4 text-center text-2xl italic text-green-700">
        Pronunciacion
      </p>
      <p className="mb-7 text-center text-xl">Traduccion</p>
      <p className="mx-auto mb-16 max-w-2xl text-blue-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur in,
        quae magnam praesentium nihil amet temporibus numquam tempora neque
        dolore laborum officia ab reprehenderit eos minima, maiores aut. Nam,
        vero?
      </p>
      <button
        className="float-right rounded border border-blue-500 
      bg-transparent px-4 py-2 text-sm font-semibold text-blue-700
       hover:border-transparent hover:bg-blue-500 hover:text-white"
      >
        Siguiente
      </button>
    </div>
  );
};
