import React, { useState } from 'react';
import {Form, FormGroup, Col, Input, Label} from 'reactstrap';
import { login } from '../services/authService';

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = {
      'email' : email,
      'password' : password
    }
    await login(formData)
    window.location = '/home'
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
          <FormGroup row>
                <Label htmlFor="email" md={12}>Email</Label>
                <Col md={12}>
                    <Input type="email" className="login-field" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="email" md={12}>Password</Label>
                <Col md={12}>
                    <Input type="password" className="login-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Col>
            </FormGroup>
            <button>Submit</button>
      </Form>
        
    </div>
  );
}

export default Login;