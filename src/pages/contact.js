import React from "react"
import { Form, Button, FormInput, Textarea } from "../framework"

import SEO from "../components/seo"

const Contact = () => (
  <>
    <SEO title="Contact" />
    <h1>Contact us.</h1>
    <p>We like that sort of thing.</p>
    <Form name="dbsContact" method="POST" data-netlify='true' netlify-honeypot="shibboleth">
      <div style={{display: 'none'}}>
        <label>This is a mechanism to prevent unwanted messages, and you shouldn't be able to see it: </label>
        <FormInput name='shibboleth'></FormInput>
      </div>
      <label>Name: </label>
      <FormInput type='text' name='name'></FormInput>
      <label>Message: </label>
      <Textarea rows={6} name='message'></Textarea>
        
      <Button type='submit'>SUBMIT</Button>
    </Form>
  </>
)

export default Contact
