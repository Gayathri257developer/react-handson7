import React, {Component} from 'react'
import UserList from './features/users/UserList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import './App.css'

 class App extends Component {
  render() {
    return (
      
      <div>
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/list-user' element={<UserList/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
      <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
 
      </div>
    )
  }
}

export default App;
