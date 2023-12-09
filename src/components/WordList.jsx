export const WordList = ({ children }) => {
  return (
    <div className="max-h-[480px] w-1/3 overflow-auto rounded border bg-white text-center shadow">
      <h2 className="border-b py-4 text-xl font-semibold">
        Words <span className="text-base">(369)</span>
      </h2>
      <ul>{children}</ul>
    </div>
  );
};
