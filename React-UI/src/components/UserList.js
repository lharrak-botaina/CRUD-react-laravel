import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import http from "../http";
import axios from 'axios';
import{
    ListGroup,
    ListGroupItem,
    Button
    
}from 'reactstrap'

const UserList = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetchAllUsers();
  },[]);
  const fetchAllUsers =()=>{
    http.get('/customers').then(res=>{
      setUsers(res.data);
    })
  }



  return (
   <ListGroup className='mt-4 ' >
    <ListGroupItem className='d-flex  justify-content-between'> 
    <table className='table'>
      <thead>
      <th>id</th>

        <th>first name</th>
        <th>last name</th>
        <th>email</th>
        <th>action</th>
      </thead>
      <tbody>
        {users.map((customer,getCustomers)=>(
          <tr key={customer.id}>
                <td>{getCustomers}</td>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>
                <div className='ml-auto  '>
                  <Link className='btn btn-warning mr-1' to='/edit/1'>edit</Link>
                  <Button color='danger'>delete</Button>

                </div>
                
                </td>
          </tr>
         
        ))}
        

      </tbody>
    </table>
   
    </ListGroupItem>
    
   </ListGroup>
  )
}

export default UserList;
