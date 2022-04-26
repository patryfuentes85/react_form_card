import React, { Component } from "react";
import {formContext} from '../../../context/formContext';

class Form extends Component {
  static contextType = formContext;

  constructor(props) {
    super(props)
    
    this.state = {
      name:"",
      email:"",
      image:"",
      age:""
    }

  }

  login = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const image = event.target.image.value;
    const age = event.target.age.value;

    this.setState({name,email,image,age})

    // Guardar en el contexto 
    const loginUser = this.context.login // leer el contexto .. la función login
    loginUser(name, email, image, age);
    }


  render() {
    return <div>
      <h1>Contact</h1>
  <form onSubmit={this.login}>
    <label htmlFor="name">Name:</label><br/>
    <input type="text" id="name" name="name"/><br/>
    <label htmlFor="user">Email:</label><br/>
    <input type="text" id="email" name="email"/><br/>
    <label htmlFor="user">Image:</label><br/>
    <input type="text" id="image" name="image"/><br/>
    <label htmlFor="user">Age:</label><br/>
    <input type="text" id="age" name="age"/><br/>
    
    <input type="submit" value="Send"/>
  </form>
  
  <h3>Welcome:{this.state.name?this.state.name:""}</h3>
  <p>Email:{this.state.email?this.state.name:""}</p>
  <p>Age:{this.state.age?this.state.age:""}</p>
  <img src={this.state.image} alt="imagen"></img>
  
  

  </div>;
  }


}

export default Form;
