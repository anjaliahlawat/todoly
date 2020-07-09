import React, { useState } from 'react';
import {Form, FormGroup, Col, Input} from 'reactstrap';
import { login } from '../services/authService';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <div className="login">
      <div className="header">
          <Image src={require('../assets/header.PNG')} />
      </div>
      
      <Form onSubmit={onSubmit}>
          <FormGroup row>
                <Col md={12}>
                    <Input 
                        type="email" 
                        className="login-field"
                        placeholder={'Email'} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={12}>
                    <Input 
                        type="password" 
                        className="login-field" 
                        placeholder={'Password'}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <Col md={12}>
                <button>Login</button>
            </Col>
            <Col md={12} className="footer-text">
                <span>Create your account for free.</span>
                <Link to={'/register'}> Sign up Now</Link>
            </Col>
      </Form>        
    </div>
  );
}

export default Login;