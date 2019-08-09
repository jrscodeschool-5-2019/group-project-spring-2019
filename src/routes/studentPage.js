import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import CardList from '../components/card-list/CardList';
import SearchDirectory from '../components/search-directory/SearchDirectory';
import SideBar from '../components/sidebar/Sidebar';
import Filter from '../components/filter/Filter';
import Pagination from '../components/pagination/pagination';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() => {
    fetch('http://localhost:8000/student-view')
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
    currentUsers =>
      currentUsers.name.first.toLowerCase().includes(search.toLowerCase()) +
      currentUsers.name.last.toLowerCase().includes(search.toLowerCase()) +
      currentUsers.employer.toLowerCase().includes(search.toLowerCase()) +
      currentUsers.location.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * cardsPerPage;
  const indexOfFirstUser = indexOfLastUser - cardsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // console.log(currentUsers);
  // console.log(users);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='columns'>
        {/* search bar */}
        <SideBar />
        <div className='column is-9'>
          <div className='container'>
            <div className='section'>
              <div className='box'>
                <div className='field has-addons'>
                  <div className='control is-expanded'>
                    <SearchDirectory handleChange={handleChange} />
                  </div>
                  <div className='control' />
                  <Filter users={users} setFilteredCards={setFilteredCards} />
                </div>
              </div>
            </div>
          </div>
          {/* Cards called in here */}
          <CardList users={currentUsers} />
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={users.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
