import React from 'react';

function EmployeeDetailsComponent(props) {
    return (
        <div className="col-sm-4">
            <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="m-2 p-4">
                <div className='text-center'>
                    <img src={props.emp.imageUrl}/>
                </div>
                <p>Id: <span className="text-primary">{props.emp.id}</span></p>
                <p>First Name: <span className="text-primary">{props.emp.id}</span></p>
                <p>Last Name: <span className="text-primary">{props.emp.lastName}</span></p>
                <p>Email: <span className="text-primary">{props.emp.email}</span></p>
                <p>Contact No: <span className="text-primary">{props.emp.contactNumber}</span></p>
                <p>Age: <span className="text-primary">{props.emp.age}</span></p>
                <p>DOB: <span className="text-primary">{props.emp.dob}</span></p>
                <p>Salary: <span className="text-primary">{props.emp.salary}</span></p>
                <button className="btn btn-danger" onClick={() => props.deleteEmp(props.emp.id)}>Delete</button>
            </div>
        </div>
    )
}

export default EmployeeDetailsComponent;