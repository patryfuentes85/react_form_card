import React, { Component } from "react";
import {formContext} from '../../context/formContext';

export class Header extends Component {
  render() {
    return (
      <header>
        <div>
        <formContext.Consumer>
          {({user,logout}) =>
              user?
                <>
                  <p>Hola {user.email}</p>
                  <button onClick={logout}>Logout</button>
                </>:""
          }
          </formContext.Consumer>
        </div>
        </header>
    )
  }
}
export default Header
