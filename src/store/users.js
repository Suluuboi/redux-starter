import { createSlice} from '@reduxjs/toolkit';

//reducer
let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState:[],
    reducers:{
        userAdded:(users, action)=>{
            users.push(
                {
                    id: lastId++,
                    name: action.payload.name
                }
            );
        },

        userRemoved:(users, action)=>{
            users.filter(user=>user.id === action.payload.id);
        }
    },

    
})


export const { userAdded, userRemoved} = slice.actions
export default slice.reducer