import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data";


const userSlice = createSlice({
    name:"Users",
    initialState:userList,
    reducers:{
         addUser:(state,action)=>{
              state.push(action.payload)
         },
         updateUser:(state,action)=>{
              const {id,name,email,number}=action.payload;
              const uu = state.find(user=>user.id==id);
              if(uu){
                   uu.name = name;
                   uu.email = email;
                   uu.number = number;
              }
         },
         deleteUser:(state,action)=>{
           const id=action.payload;
           console.log(action,id)
            const uu = state.find(user=>user.id==id);
            if(uu){
               return state.filter(user=>user.id!==id);
            }
         }
    }
})
export const {addUser , updateUser,deleteUser} = userSlice.actions

export default userSlice.reducer;