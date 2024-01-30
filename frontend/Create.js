import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Create() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    image: "",
  });
  const handleForm = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('password', data.password);
    formdata.append('salary', data.salary);
    formdata.append('address', data.address);
    formdata.append('image', data.image);
    axios.post('http://localhost:8081/addemployee', formdata)
      .then(res => {
        if (res.data.status==="success") {
          navigate('/')
          console.log(res.data.Result);
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className=' d-flex justify-content-center bg-black align-items-center vh-100'>
      <div className=' rounded bg-white p-3 w-50 '>
        <h2>Add Employee</h2>
        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control border-2 border" onChange={e => setdata({ ...data, name: e.target.value })} placeholder="Enter Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control border-2 border" onChange={e => setdata({ ...data, email: e.target.value })} placeholder="Enter Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control border-2 border" onChange={e => setdata({ ...data, password: e.target.value })} placeholder="Enter Password" required />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input type="number" className="form-control border-2 border" onChange={e => setdata({ ...data, salary: e.target.value })} placeholder="Enter Salary" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control border-2 border" onChange={e => setdata({ ...data, address: e.target.value })} placeholder="Ambo 1234 st" required />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="image">Image</label>
            <input type="file" className="form-control border-2 border" onChange={e => setdata({ ...data, image: e.target.files[0] })} required />
          </div>
          <button type="submit" className="btn w-100 btn-primary">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Create