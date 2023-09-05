const UserData = ({users}) => {
    return (
        <>
            {
              users.map((curUser)=> {
                const {id,name,email,address} = curUser;
                const {street,city,zipcode} = curUser.address;    // objects of object , needs destructuring to render on UI //
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{street} , {city} , {zipcode} </td>
                    </tr>
                )
              })  
            }
        </>
    )
                     
}

export default UserData;