import React from 'react';
import { Link } from 'react-router-dom';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button
}from 'reactstrap';

const editUser = () => {
  return (
    <Form>
    <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter Name'></Input>
    </FormGroup>
    <Button type='submit'>Edit </Button>
    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
</Form>
  )
}

export default editUser
