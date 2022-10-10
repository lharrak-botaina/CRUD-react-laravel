import React from 'react';
import {useState} from 'react';
import http from "../http";
import { useNavigate } from 'react';

import { Link } from 'react-router-dom';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button
}from 'reactstrap';





const AddUser = () => {
    // const navigate =useNavigate();
    const [inputs,setInputs] =useState({});
    const handleChange =(event)=>{
      const name =event.target.name;
      const value =event.target.value;
      setInputs(values=>({...values,[name]:value}))
    }

  const submitForm=()=>{
    http.post('/create',inputs).then((res)=>{
      navigate('/');
    })
  }

  return (
    <Form>
        <FormGroup>
            <Label>firstName</Label>
            <Input type='text' name='firstName' placeholder='Enter firstName'
              value={inputs.firstName||''}
              onChange ={handleChange}
            />
                
            <Label>lastName</Label>
            <Input type='text' name='lastName' placeholder='Enter lastName'
                value={inputs.lastName||''}
                onChange ={handleChange}
            />
            <Label>email</Label>
            <Input type='email' name='email' placeholder='Enter email'
              value={inputs.email||''}
              onChange ={handleChange}
            />
        </FormGroup>
        <Button type='submit' onClick={submitForm}>Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default AddUser;
