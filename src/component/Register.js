import React, { useState } from 'react';
import { register } from '../services/users';
import {Form, FormGroup, Col, Input, Label} from 'reactstrap';

function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = {
      'email' : email,
      'password' : password,
      'userName' : userName,
    }
    const res = await register(formData)
    console.log(res.data)
  }

  return (
    <div>
        <Form onSubmit={onSubmit}>
          <FormGroup row>
                <Label htmlFor="userName" md={12}>Username</Label>
                <Col md={12}>
                    <Input type="text" className="register-field" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </Col>
            </FormGroup>
          <FormGroup row>
                <Label htmlFor="email" md={12}>Email</Label>
                <Col md={12}>
                    <Input type="email" className="register-field" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Col>
            </FormGroup>
          <FormGroup row>
              <Label htmlFor="password" md={12}>Password</Label>
              <Col md={12}>
                  <Input type="password" className="register-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Col>
          </FormGroup>
          <button>Submit</button>
      </Form>
      
    </div>
  );
}

export default Register;