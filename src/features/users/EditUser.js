import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextField from '../../Components/TextField';
import { editUser } from './UserSlice';
import '../../Components/Navbar.css'

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser= users.filter(user => user.id === params.id);
    const { name, age, course, batch } = existingUser[0];
  
    const [values, setValues] = useState({
        name: name,
        age: age,
        course: course,
        batch: batch,
    });

  const handleEditUser = () =>{
    setValues({name: '', age: '', course: '', batch: '' });
    dispatch(editUser({
      id: params.id,
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

    <button onClick={handleEditUser} className='btn btn-success' style={{marginLeft: "580px"}}>Update</button>
    <Link to={"/list-user"}>
    <button className='btn btn-warning' style={{marginLeft: "20px"}}>Cancel</button>
    </Link>
    </div>
  )
}

export default EditUser;