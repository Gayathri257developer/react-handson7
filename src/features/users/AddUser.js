import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate,Link } from 'react-router-dom';
import TextField from '../../Components/TextField'
import { addUser } from './UserSlice';
import '../../Components/Navbar.css'

const AddUser = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        age: '',
        course: '',
        batch: '',
    });

  const handleAddUser = () =>{
    setValues({name: '', age: '', course: '', batch: ''});
   dispatch(addUser({
    id: uuidv4(),
    name: values.name,
    age: values.age,
    course: values.course,
    batch: values.batch
   }));
    navigate("/list-user")
  }

  return (
    <div>
    <TextField
    value={values.name}
    onChange={(e) => setValues({ ...values, name: e.target.value})}
    inputProps={{type: "text"}}
    label="Name"/>

    <TextField
    value={values.age}
    onChange={(e) => setValues({ ...values, age: e.target.value})}
    inputProps={{type: "number"}}
    label="Age"/>

    <TextField
    value={values.course}
    onChange={(e) => setValues({ ...values, course: e.target.value})}
    inputProps={{type: "text"}}
    label="Course"/>

    <TextField
    value={values.batch}
    onChange={(e) => setValues({ ...values, batch: e.target.value})}
    inputProps={{type: "text"}}
    label="Batch"/>

    <button onClick={handleAddUser} className='btn btn-success' style={{marginLeft: "580px"}}>Add</button>
    <Link to={"/list-user"}>
    <button className='btn btn-warning' style={{marginLeft: "20px"}}>Cancel</button>
    </Link>
    </div>
  )
}

export default AddUser;