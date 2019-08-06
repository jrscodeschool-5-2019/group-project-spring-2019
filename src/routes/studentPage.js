import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.css';
import CardList from '../components/card-list/CardList';
import SearchDirectory from '../components/search-directory/SearchDirectory';
import NavMenu from '../components/navMenu';
import SideBar from '../components/sidebar/Sidebar';

function Page(props) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/student-view')
      .then(res => res.json())
      .then(data => setUsers(data.data));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    user =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) +
      user.name.last.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Navagation section and logo

    <div>
      {props.user.loggedIn && <p>{props.user.username}</p>}
      {/* <NavMenu /> */}
      <div className='columns'>
        <SideBar />
        <div className='column is-9'>
          {/* end of the nav section , search section below */}
          <div className='container'>
            <div id='flow'>
              <span className='flow-1' />
              <span className='flow-2' />
              <span className='flow-3' />
            </div>
            <div className='section'>
              <div className='box'>
                <div className='field has-addons'>
                  <div className='control is-expanded'>
                    <SearchDirectory handleChange={handleChange} />
                  </div>
                  <div className='control'>
                    <button className='button is-info'>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardList users={filteredUsers} />
        </div>
      </div>

      {/* End of the search */}

      {/* columns for student cards */}
    </div>
  );
}

export default Page;
