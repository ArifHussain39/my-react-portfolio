import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const ContactForm = () => {

  const [userinfo, setUserinfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  function submitInfo(){
    console.log(userinfo);
  }



  return (
    <div className='text-white' style={{ padding: '40px' }}>
      <h2 className="text-center">Contact Us!</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={userinfo.name} onChange={(e) => setUserinfo({...userinfo, name:e.target.value})} type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={userinfo.email} onChange={(e) => setUserinfo({...userinfo, email:e.target.value})} type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control value={userinfo.message} onChange={(e) => setUserinfo({...userinfo, message:e.target.value})} as="textarea" rows={5} placeholder="Your message" />
        </Form.Group>

        <Button onClick={submitInfo} className='btn-secondary' type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
