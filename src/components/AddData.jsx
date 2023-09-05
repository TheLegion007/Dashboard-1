const AddData = ({contact}) => {     // destructuring of object //
    return (
        <>
            {
              contact.map((curUser)=> {
                const {id,fullName,address,phoneNumber} = curUser;
                {/*const {street,city,zipcode} = curUser.address;*/}    // objects of object , needs destructuring to render on UI //
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{curUser.address}</td>
                        <td>{curUser.phoneNumber}</td>
                        <td>{curUser.email}</td>
                    </tr>
                )
              })  
            }
        </>
    )
                     
}

export default AddData;