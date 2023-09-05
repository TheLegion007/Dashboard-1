import "./SearchTC.css";

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
    return (
      <div className="searchtc">
          <table id="t1">
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
      </div>
    )
    
  }
  export default SearchTC