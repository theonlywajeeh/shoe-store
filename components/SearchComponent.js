import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/io';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault(); 

    clearSearchResults();

    try {
      const response = await fetch(`/api/search?query=${query}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error('Error searching products:', response.statusText);
        clearSearchResults();
      }
    } catch (error) {
      console.error('Error searching products:', error);
      clearSearchResults();
    }
  };

  const clearSearchResults = () => {
    
    setSearchResults([]);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-50 rounded-md px-4 py-2 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className=""
        >
         
          Search
        </button>
        <button
          type="button" // Specify type="button" to prevent form submission
          className="ml-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded"
          onClick={clearSearchResults}
        >
          Clear Search
        </button>
      </form>

      <div>
        {searchResults.map((product) => (
          <div key={product.slug}>
            <h2>{product.name}</h2>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
