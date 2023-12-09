import { InputForm } from "./";

export const Header = () => {
  return (
    <header className="flex items-baseline justify-between border bg-white px-20 py-8">
      <h1 className="text-2xl font-semibold">My Learning App</h1>
      <InputForm />
    </header>
  );
};
