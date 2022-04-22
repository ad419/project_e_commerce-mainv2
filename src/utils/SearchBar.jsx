import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const fetchSearchItems = async () => {
    const { data } = await commerce.products.list({ query: keyword });

    setSearchItems(data);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log(keyword);
  console.log(searchItems);

  return (
    <>
      <div className="flex">
        <input
          onChange={handleInputChange}
          placeholder="search any product"
          type="text"
        />
        <button onClick={fetchSearchItems}>search</button>
      </div>
      <div>
        {searchItems?.map((item) => (
          <div key={item?.id}>
            <h1>{item?.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
