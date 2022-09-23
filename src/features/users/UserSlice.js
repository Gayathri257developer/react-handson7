import { createSlice } from '@reduxjs/toolkit'

const initialState = [

];

const UserSlice = createSlice({
    name: "users", 
    initialState,
    reducers:{
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        editUser: (state, action) =>{
            const { id, name, age, course, batch } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser){
            existingUser.name = name;
            existingUser.age = age;
            existingUser.course = course;
            existingUser.batch = batch;
            }
        },
        deleteUser: (state, action) =>{
            const { id } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser){
             return state.filter(user => user.id !==id);

        }
    } 
    }
});

export const { addUser,deleteUser } = UserSlice.actions;
export const { editUser } = UserSlice.actions;
export default UserSlice.reducer;
