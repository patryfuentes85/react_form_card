
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from "react-router-dom";
import {formContext} from './context/formContext';
import {useState} from 'react';

function App() {

  const [user, setUser] = useState("Patricia"); // hook useState

  //login

  const login = (name, email, image, age) => {
      setUser({name, email, image, age});
  }
  
  //logout

  const logout = () => {
    setUser("");
  }

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
        <BrowserRouter>
        <formContext.Provider value={data}>
        <Header/>
        <Main/>
        </formContext.Provider>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
