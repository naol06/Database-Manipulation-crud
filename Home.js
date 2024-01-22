import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setdata] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:8081/getdata')
      .then(res => {
        console.log(res.data.Result);
        if (res.data.status === "success") {
          setdata(res.data.Result)
        }
      })
      .catch(err => console.log(err))
  }, []);

  const handledelete = (id) => {
    axios.delete('http://localhost:8081/delete/' + id)
      .then(res => {
        if (res.data.status === "success") {
          window.location.reload()
         
        }
      })
      .catch(err => console.log(err))

  }
  return (
    <div className=' d-flex justify-content-center bg-black align-items-center vh-100'>
      <div className=' rounded bg-white p-3 '>
        <h2>Employee list</h2>

        <div className='d-flex justify-content-end'>
          <Link to='/create' className="btn btn-success">Create +</Link>
        </div>
       
        <table className="table w-">
          <thead>
            <tr>
           
              <th >Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((employee, i) => {
              return <tr key={i}>
             
                <td>{employee.name}</td>
                
                <td> <Link  to={`/read/${employee.id}`}>{<img className='imagedata' src={'http://localhost:8081/images/' + employee.image} alt='' />}</Link></td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>
                <div className='d-flex align-items-center justify-content-center'>
                  <Link to={`/read/${employee.id}`} className="btn btn-primary">Read</Link>
                  <Link to={`/edit/${employee.id}`} className="btn btn-info mx-2">Edit</Link>
                  <button type="button" onClick={() => handledelete(employee.id)} className="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home