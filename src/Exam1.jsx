import React, { useEffect, useState } from "react";
import axios from "axios";

const Exam1 = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    fetchData();
  }, []);

  const filter = () => {
    let filteredUsers;
    if (users.length !== 0 && query.length > 1) {
      filteredUsers = users
        .filter((d) => d.name.toLowerCase().includes(query))
        .map((u) => <div el={u.id}>{u.name}</div>);
    }
    console.log(filteredUsers);
    return filteredUsers;
  };
  return (
    <div className="border p-10 m-10 ">
      <input
        type="text"
        placeholder="Search"
        className="text-black mb-4 p-2 focus:outline-none rounded-sm"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="ml-2">
        {filter() ? filter() : users.map((el) => <div>{el.name}</div>)}
      </div>
    </div>
  );
};

export default Exam1;
