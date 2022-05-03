import { useState } from 'react';
import './App.css';
import Mock_Data from "./MOCK_DATA.json";
import ReactPaginate from 'react-paginate';

function App() {
  const [users, setUsers] = useState(Mock_Data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <div className="App">
      {
        users
        .slice(pageVisited, pageVisited + userPerPage)
        .map((elem) => {
          return(
            <div className="user_info" key={elem.id}>
              <p>First name: {elem.first_name}</p>
              <p>Last name: {elem.last_name}</p>
              <p>Email: {elem.email}</p>
            </div>
          );
        })
      }    
      <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"pagination_container"}
      nextClassName={"pagination_next"}
      previousClassName={"pagination_previous"}
      activeClassName={"paginaiton_active"}
      disabledClassName={"pagination_disable"}
      />  
    </div>
  );
}

export default App;
