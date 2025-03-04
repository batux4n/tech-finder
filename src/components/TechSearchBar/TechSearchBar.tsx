import { useState } from "react";

interface TechSearchBarProps {
  onSearch: (query: string) => void;
}

const TechSearchBar: React.FC<TechSearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearchClick = () => {
    onSearch(query); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {  
      handleSearchClick();     // Call the search function
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}  
        placeholder="Örneğin: Navigation Bar, Catch"
      />
      <button className="send-button" onClick={handleSearchClick}>Ara</button>
    </div>
  );
};

export default TechSearchBar;
