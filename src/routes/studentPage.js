import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import CardList from "../components/card-list/CardList";
import SearchDirectory from "../components/search-directory/SearchDirectory";
import SideBar from "../components/sidebar/Sidebar";
import Filter from "../components/filter/Filter";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/student-view")
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
        setFilteredCards(data.data);
      });
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredUsers = filteredCards.filter(
    user =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) +
      user.name.last.toLowerCase().includes(search.toLowerCase()) +
      user.employer.toLowerCase().includes(search.toLowerCase()) +
      user.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="columns">
        {/* search bar */}
        <SideBar />
        <div className="column is-9">
          <div className="container">
            <div className="section">
              <div className="box">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <SearchDirectory handleChange={handleChange} />
                  </div>
                  <div className="control" />
                  <Filter users={users} setFilteredCards={setFilteredCards} />
                </div>
              </div>
            </div>
          </div>
          {/* Cards called in here */}
          <CardList users={filteredUsers} />
        </div>
      </div>
    </div>
  );
};

export default Page;
