import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState } from "react";
import UserData from "./components/UserData";
import AddTC from "./components/AddTC";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div> 
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>  
            <Route path="/add-tc" element={<AddTC/>}></Route>  
            <Route path="/modify-tc" element={<ModifyTC/>}></Route>  
            <Route path="/search-tc" element={<SearchTC/>}></Route>      
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


function Dashboard() {
  return (
    <div>Dashbaord</div>
  )
}


function SearchTC() {    // get API data into table // 

  const [users, setUsers] = useState([]);

  const fetchUsers = async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0)  
      {
        setUsers(data);
      }
      console.log(data);
    }
    catch(e) {
      console.error(e)
    }
  } 
  useEffect(()=> {
    fetchUsers(API);
  },[])
  return <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users}/>
      </tbody>
    </table>
  </>
}

function ModifyTC() { 
  return (
    <div>add TC</div>
  )
}