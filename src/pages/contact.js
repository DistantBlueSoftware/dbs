import React, {Component} from "react"
import { navigateTo } from "gatsby-link"
import { Form, Button, FormInput, Textarea } from "../framework"

import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  render() {
    return (
      <>
        <SEO title="Contact" />
        <h1>Contact us.</h1>
        <p>We like that sort of thing.</p>
        <Form name='dbsContact' method='post' action='/success' data-netlify='true' netlify-honeypot='shibboleth' onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div style={{display: 'none'}}>
            <label>This is a mechanism to prevent unwanted messages, and you shouldn't be able to see it: </label>
            <FormInput name='shibboleth' onChange={this.handleChange}></FormInput>
          </div>
          <label>Name: </label>
          <FormInput type='text' name='name' onChange={this.handleChange}></FormInput>
          <label>Message: </label>
          <Textarea rows={6} name='message' onChange={this.handleChange}></Textarea>
            
          <Button type='submit'>SUBMIT</Button>
        </Form>
      </>
    )
  }
}