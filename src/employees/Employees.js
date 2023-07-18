import React, { useState } from 'react';
import EmployeeDetailsComponent from './EmployeeDetails';

function EmployeesComponent() {
    const [employees, setEmployees] = useState([
        {
          "id": 1001,
          "imageUrl": "https://hub.dummyapis.com/Image?text=RK&height=120&width=120",
          "firstName": "Rex",
          "lastName": "Kling",
          "email": "Rex.Kling@dummyapis.com",
          "contactNumber": "4248897511",
          "age": 24,
          "dob": "17/10/1999",
          "salary": 1.0,
          "address": "Address1"
        },
        {
          "id": 1002,
          "imageUrl": "https://hub.dummyapis.com/Image?text=AA&height=120&width=120",
          "firstName": "Avery",
          "lastName": "Abbott",
          "email": "Avery.Abbott@dummyapis.com",
          "contactNumber": "4188690099",
          "age": 61,
          "dob": "15/04/1962",
          "salary": 2.0,
          "address": "Address2"
        },
        {
          "id": 1003,
          "imageUrl": "https://hub.dummyapis.com/Image?text=AP&height=120&width=120",
          "firstName": "Alaina",
          "lastName": "Padberg",
          "email": "Alaina.Padberg@dummyapis.com",
          "contactNumber": "4204592329",
          "age": 48,
          "dob": "12/05/1975",
          "salary": 3.0,
          "address": "Address3"
        },
        {
          "id": 1004,
          "imageUrl": "https://hub.dummyapis.com/Image?text=RK&height=120&width=120",
          "firstName": "Rose",
          "lastName": "Kuhlman",
          "email": "Rose.Kuhlman@dummyapis.com",
          "contactNumber": "4732893628",
          "age": 28,
          "dob": "04/01/1995",
          "salary": 4.0,
          "address": "Address4"
        },
        {
          "id": 1005,
          "imageUrl": "https://hub.dummyapis.com/Image?text=MS&height=120&width=120",
          "firstName": "Maci",
          "lastName": "Stamm",
          "email": "Maci.Stamm@dummyapis.com",
          "contactNumber": "4002895957",
          "age": 67,
          "dob": "25/04/1956",
          "salary": 5.0,
          "address": "Address5"
        },
        {
          "id": 1006,
          "imageUrl": "https://hub.dummyapis.com/Image?text=HL&height=120&width=120",
          "firstName": "Halle",
          "lastName": "Leffler",
          "email": "Halle.Leffler@dummyapis.com",
          "contactNumber": "4750998860",
          "age": 61,
          "dob": "10/10/1962",
          "salary": 6.0,
          "address": "Address6"
        },
        {
          "id": 1007,
          "imageUrl": "https://hub.dummyapis.com/Image?text=LF&height=120&width=120",
          "firstName": "Lily",
          "lastName": "Ferry",
          "email": "Lily.Ferry@dummyapis.com",
          "contactNumber": "4404192262",
          "age": 67,
          "dob": "12/11/1956",
          "salary": 7.0,
          "address": "Address7"
        },
        {
          "id": 1008,
          "imageUrl": "https://hub.dummyapis.com/Image?text=PG&height=120&width=120",
          "firstName": "Priscilla",
          "lastName": "Gibson",
          "email": "Priscilla.Gibson@dummyapis.com",
          "contactNumber": "4385192777",
          "age": 27,
          "dob": "22/05/1996",
          "salary": 8.0,
          "address": "Address8"
        },
        {
          "id": 1009,
          "imageUrl": "https://hub.dummyapis.com/Image?text=VQ&height=120&width=120",
          "firstName": "Vita",
          "lastName": "Quigley",
          "email": "Vita.Quigley@dummyapis.com",
          "contactNumber": "4195193580",
          "age": 45,
          "dob": "17/12/1978",
          "salary": 9.0,
          "address": "Address9"
        },
        {
          "id": 1010,
          "imageUrl": "https://hub.dummyapis.com/Image?text=OS&height=120&width=120",
          "firstName": "Osborne",
          "lastName": "Sanford",
          "email": "Osborne.Sanford@dummyapis.com",
          "contactNumber": "4439295804",
          "age": 21,
          "dob": "01/01/2002",
          "salary": 10.0,
          "address": "Address10"
        }
      ]);
    const deleteEmp = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    }
    return (
        <div className="container">
            <div className="row my-4">
                {employees.map(emp => (
                    <EmployeeDetailsComponent emp={emp} deleteEmp={deleteEmp}/>
                ))}
            </div>
        </div>
    )

}

export default EmployeesComponent;