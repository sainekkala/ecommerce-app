import React, { useContext, useEffect } from 'react';
import UserContext from './UserContext';

function UsersListComponent() {
    const { users, editUser, deleteUser }  = useContext(UserContext);
    useEffect(() => {
    }, []); 
    return (
        <div >
            <h3 className="text-center">Users List</h3>
            {users && users.map(user => (
                <div className="row mt-4 mb-2 border-bottom" key={user.id}>
                    <div className="col-sm">
                        <p><strong>Id: <span className="text-primary">{user._id}</span></strong></p>
                        <p><strong>First Name: <span className="text-primary">{user.firstName}</span></strong></p>
                        <p><strong>Last Name: <span className="text-warning">{user.lastName}</span></strong></p>
                        <p><strong>Email: <span className="text-success">{user.email}</span></strong></p>
                        <p><strong>Mobile No: <span className="text-success">{user.mobile}</span></strong></p>
                        <p><strong>Gender: <span className="text-danger">{user.gender}</span></strong></p>
                        <button className="btn btn-warning mb-2 me-2" onClick={() => editUser(user)}>Edit</button>
                        <button className="btn btn-danger mb-2" onClick={() => deleteUser(user._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UsersListComponent;