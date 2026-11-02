
import { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search songs or artists..."
            />

            <button type="submit">
                SEARCH
            </button>
        </form>
    );
}

export default SearchBar;
