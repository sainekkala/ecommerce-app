import React, { useState, useEffect } from 'react';
import axiosInstance from '../Axios';
import { ToastContainer, toast } from 'react-toastify';

import UserContext from './UserContext';
import UsersListComponent from './UsersList';
import AddUserComponent from './AddUser';

function UsersComponent() {
    const [users, setUsers] = useState([]);
    const [editedUser, setEditedUser] = useState({});
    useEffect(() => {
        getAllUsers();
    }, []);
    const getAllUsers = async () => {
        try {
            const { data } = await axiosInstance.get('/v1/users');
            setUsers(data.users);
        } catch(error) {
            
        }
    }
    const addUser = (user) => {
        setUsers([
            ...users, 
            {
                id: users.length + 1, 
                ...user
            }
        ]);
        window.alert('Added user successfully.');
    };
    const deleteUser = async (id) => {
        try {
            await axiosInstance.delete('/v1/users/' + id);
            toast.success('Deleted user successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            getAllUsers();
        } catch(error) {
            
        }
    };
    const editUser = (user) => {
        setEditedUser(user);
        console.log(user);
    };
    const saveUser = (id, user) => {
        setUsers(
            users.map(u => u.id === id ? {id, ...user} : u)
        )
    };
    return (
        <div className="container my-3">
            <div className="row">
                <UserContext.Provider value={{users, deleteUser, addUser, editUser, saveUser, editedUser}}>
                    <div className="col-sm">
                        <UsersListComponent />
                    </div>
                    <div className="col-sm">
                        <AddUserComponent />
                    </div>

                </UserContext.Provider>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        </div>
    )
}

export default UsersComponent;