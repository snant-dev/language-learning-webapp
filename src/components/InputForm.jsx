const jsonExample = `{"menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }}`;

export const InputForm = () => {
  return (
    <form>
      <label>
        <span className="mr-2">Insertar JSON:</span>
        <input
          className="mr-2 rounded border px-4 py-2"
          type="text"
          placeholder={jsonExample}
        />
      </label>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        type="submit"
      >
        Insertar
      </button>
    </form>
  );
};
