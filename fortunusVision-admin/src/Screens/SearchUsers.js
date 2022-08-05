import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import NavBar from "../components/NavBar";
import SearchTable from "../components/SearchTable";
import { searchUser } from "../helper/http";
import "../styling/SearchUsers.css";
const SearchUsers = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    async function search() {
      let response = await searchUser(input);
      setData(response);
    }
    search();
  }, [input]);
  return (
    <div className="backgroundImage3">
      <NavBar />
      <div className="searchBar">
        <AiOutlineSearch />
        <input
          placeholder="type here"
          className="searchInput"
          type="text"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </div>

      <SearchTable data={data} />
    </div>
  );
};

export default SearchUsers;
