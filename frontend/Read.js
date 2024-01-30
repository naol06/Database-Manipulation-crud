import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Read() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/read/' + id)
      .then(res => {
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
          navigate('/')
        }
      })
      .catch(err => console.log(err))

  }


  return (
    <div className='d-flex justify-content-center vh-100 align-items-center bg-black '>
      <div className='rounded w-50 p-3 bg-white  '>
        {data?.map((employee, i) => {
          return <div key={i}>
            <div className='row'>
              <div className='col-6 '>
                <img className='imageread' src={'http://localhost:8081/images/' + employee.image} alt='' />
              </div>
              <div className='col-6 pt-5 '>


                <h1 >Name:   {employee.name}</h1>
                <h1 >Salary: {employee.salary}</h1>
                <h1 > Address: {employee.address}</h1>
              </div>
            </div>
            <div className='d-flex justify-content-end  align-items-center'>
              <Link to='/' className="btn btn-primary">Back</Link>
              <Link to={`/edit/${employee.id}`} className="btn btn-info mx-2">Edit</Link>
              <button type="button" onClick={() => handledelete(employee.id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        })}




      </div>
    </div>
  )
}

export default Read