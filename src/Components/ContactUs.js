import React from 'react'
import { Button, Form } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

function ContactUs() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lkwl7ta', 'template_wqdu0sm', form.current, 'wKz7_wSCC9HcggSKG')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };

  return (
    <div>
      <NavigationBar/>

      <div className='container mt-5'>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" as="textarea" rows={3} placeholder="Description" />
          </Form.Group>

          <Button variant="dark" type="submit"> Submit </Button>
        </Form>
      </div>
    </div>
  )
}

export default ContactUs