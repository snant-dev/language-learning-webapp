import {
  Header,
  Card,
  PracticeMode,
  WordList,
  WordItem,
  Footer,
} from "./components";

export const LanguageLearningApp = () => {
  return (
    <>
      <Header />

      <main className="flex items-stretch gap-4 bg-slate-100 px-16 py-16">
        <div className="w-2/3">
          <Card />
          <PracticeMode />
        </div>

        <WordList>
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
          <WordItem />
        </WordList>
      </main>

      <Footer />
    </>
  );
};
