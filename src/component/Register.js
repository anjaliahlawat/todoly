import React, { useState } from 'react';
import { register } from '../services/users';
import {Form, FormGroup, Col, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = {
      'email' : email,
      'password' : password,
      'name' : userName,
    }
    await register(formData)
    window.location='/home'
  }

  return (
    <div className="register">
        <div className="header">
            <Image src={require('../assets/header.PNG')} />
        </div>
        <Form onSubmit={onSubmit}>
          <FormGroup row>
                <Col md={12}>
                    <Input type="text" 
                        className="register-field" 
                        placeholder={'Username'}
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Col>
            </FormGroup>
          <FormGroup row>
                <Col md={12}>
                    <Input 
                        type="email" 
                        className="register-field" 
                        placeholder={'Email'}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Col>
            </FormGroup>
          <FormGroup row>
              <Col md={12}>
                  <Input type="password" 
                      className="register-field"
                      placeholder={'Password'} 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </Col>
          </FormGroup>
          <Col md={12}>
                <button>Sign up</button>
            </Col>
            <Col md={12} className="footer-text">
                <span>Already a user?</span>
                <Link to={'/login'}> Login</Link>
            </Col>
      </Form>
      
    </div>
  );
}

export default Register;