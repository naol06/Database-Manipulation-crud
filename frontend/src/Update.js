import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setdata] = useState({
        name: '',
        email: '',
        salary: '',
        address: ''
    });
    useEffect(() => {
        axios.get('http://localhost:8081/datacome/' + id)
            .then(res => {
                if (res.data.status === "success") {
                    setdata({
                        ...data,
                        name: res.data.Result[0].name,
                        email: res.data.Result[0].email,
                        salary: res.data.Result[0].salary,
                        address: res.data.Result[0].address
                    })
                }
            })
    }, []);
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8081/update/' + id, data)
            .then(res => {
                if (res.data.status === "success") {
                    setdata(res.data.Result)
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className=' d-flex justify-content-center bg-success align-items-center vh-100'>
            <div className=' rounded bg-white p-3 w-50 '>
                <h2>Update Employee</h2>
                <form onSubmit={handleUpdate} >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control border-2 border" onChange={e => setdata({ ...data, name: e.target.value })} value={data.name} placeholder="Enter Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control border-2 border" onChange={e => setdata({ ...data, email: e.target.value })} value={data.email} placeholder="Enter Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input type="number" className="form-control border-2 border" onChange={e => setdata({ ...data, salary: e.target.value })} value={data.salary} placeholder="Enter Salary" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control border-2 border" onChange={e => setdata({ ...data, address: e.target.value })} value={data.address} placeholder="Ambo 1234 st" required />
                    </div>
                    <button type="submit" className="btn btn-primary m-4">Update</button>
                    <Link to={'/'} className="btn btn-info">Back</Link>
                </form>

            </div>
        </div>
    )
}

export default Update