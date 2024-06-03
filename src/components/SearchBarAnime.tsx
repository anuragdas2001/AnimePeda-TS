import { useState } from "react";
interface SearchBarAnimeProp {
  onSearch?: (query: string) => void;
}
export const SearchBarAnime:React.FC<SearchBarAnimeProp> = ({onSearch}) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch?onSearch(query):null;
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        placeholder="Explore a world of stories. Search for anime"
        value={query}
        onChange={(event) => handleChange(event)}
        className="border border-gray-300 w-11/12 covered-by-your-grace-regular rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit">
        <img className="h-14 w-14 p-4" src="/search.png" alt="" />
      </button>
    </form>
  );
};
