import React from 'react';
import {Link} from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button
    
}from 'reactstrap'

const UserList = () => {
  return (
   <ListGroup className='mt-4'>
    <ListGroupItem className='d-flex  justify-content-between'> 
    <strong>User one</strong>
    <div className='ml-auto  '>
        <Link className='btn btn-warning mr-1' to='/edit/1'>edit</Link>
        <Button color='danger'>delete</Button>

    </div>
    </ListGroupItem>
    
   </ListGroup>
  )
}

export default UserList
