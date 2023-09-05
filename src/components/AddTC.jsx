import AddData from './AddData';
import data from './mock-data.json';
import { useState, Fragment } from "react";

function AddTC() { 
    const [contacts, setContacts] = useState(data);
    const [addFormData , setAddFrmData] = useState({
        fullname: '',
        address: '',
        phoneNumber: '',
        email: ''
    })
    return (
      <div className="app-container">
        <table id>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <AddData contact={contacts}/>
          </tbody>
        </table>
        <h2>Add Items</h2>
        <form>
            <input 
                type="text" 
                name="fullname" 
                required="required" 
                placeholder='Enter a Value'>
            </input>
            <input 
                type="text" 
                name="address" 
                required="required" 
                placeholder='Enter a Value'>
            </input>
            <input 
                type="text" 
                name='phoneNumber' 
                required="required" 
                placeholder='Enter a Value'>
            </input>
            <input 
                type="text" 
                name="email" 
                required="required" 
                placeholder='Enter a Value'>
            </input>
            <button type="submit">ADD</button>
        </form>
      </div>
    )
  }
export default AddTC   