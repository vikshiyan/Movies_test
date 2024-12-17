import { FC } from 'react';

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput: FC<Props> = ({ query, setQuery }) => {
  const clearInput = () => {
    setQuery('');
  };

  return (
    <div className="searchInput">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="searchInput-search"
          placeholder="Type search word"
          onChange={event => {
            setQuery(event.target.value);
          }}
        />
      </div>

      {query && (
        <button onClick={clearInput} className="searchInput-clearButton">
          ✕
        </button>
      )}
    </div>
  );
};
