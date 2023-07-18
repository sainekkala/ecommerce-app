import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserContext';

function AddUserComponent() {
    const { addUser, saveUser, editedUser } = useContext(UserContext);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: 'Male',
    });
    const onFormFieldChange = (value, fieldName) => {
        if (fieldName !== 'gender') {
            setUser({...user, [fieldName]: value});
        } else {
            setUser({...user, gender: fieldName === 'male' ? 'Male' : 'Female'});
        }
    }
    const addUserCTA = () => {
        (editedUser && editedUser.id) ? saveUser(editedUser.id, user) : addUser(user);
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            gender: 'Male',
        });
    };
    useEffect(() => {
        if (editedUser && editedUser.id) {
            setUser(editedUser);
        }
    }, [editedUser]);
    return (
        <div>
            <h3 className="text-center">{editedUser && editedUser.id ? 'Edit' : 'Add'} User</h3>
            <div className="m-4">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Firstname</label>
                    <input type="text" className="form-control" value={user['firstName']} onChange={($event) => onFormFieldChange($event.target.value, 'firstName')} id="firstName" placeholder="Enter Firstname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Lastname</label>
                    <input type="text" className="form-control" value={user['lastName']} onChange={($event) => onFormFieldChange($event.target.value, 'lastName')} id="lastName" placeholder="Enter Lastname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Id</label>
                    <input type="email" className="form-control" value={user['email']} onChange={($event) => onFormFieldChange($event.target.value, 'email')} id="email" placeholder="Enter Email Id" />
                </div>
                {/* <div className="mb-4">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Male" checked={user.gender} onChange={($event) => onFormFieldChange($event.target.checked, 'male')} name="gender" id="gender" />
                        <label className="form-check-label" htmlFor="gender">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Female" checked={user.gender} onChange={($event) => onFormFieldChange($event.target.checked, 'female')} name="gender" id="gender" />
                        <label className="form-check-label" htmlFor="gender">Female</label>
                    </div>
                </div> */}
                <button className="btn btn-success" onClick={addUserCTA}>Save</button>
            </div>
        </div>
    )
}

export default AddUserComponent;