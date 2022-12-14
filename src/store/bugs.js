import { createSlice} from '@reduxjs/toolkit';
import { createSelectorCreator } from 'reselect';

//reducer
let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState:[],
    reducers:{
        bugAdded:(bugs, action)=>{
            bugs.push(
                {
                    id: lastId++,
                    description: action.payload.description,
                    resolved: false
                }
            );
        },

        bugResolved:(bugs, action)=>{
            const index = bugs.findIndex(bug=>bug.id === action.payload.id)
            bugs[index].resolved = true;
        },

        bugAssignToUser:(bugs, action)=>{
            const { bugId, userId} = action.payload
            const index = bugs.findIndex(bug=>bug.id === bugId)
            bugs[index].uerId = userId;
        },

        bugRemoved:(bugs, action)=>{
            bugs.filter(bug=>bug.id === action.payload.id);
        }
    },

    
})


export const { bugAdded, bugRemoved, bugResolved, bugAssignToUser} = slice.actions
export default slice.reducer

//Selector
//memorize the function 
////get all the bugs that have false resolves stat
////if no changes mang from last reques return the one in the cache
export function getUnresolvedBugs(state){
    createSelectorCreator(
        state => state.entities.bugs,
        bugs => bugs.filter(bug=>!bug.resolved)
    )
}

export function getTeamMemberBugs(state, currentbug){
    createSelectorCreator(
        state => state.entities.bugs,
        bugs => bugs.filter(bug=>bug.member === currentbug.member)
    )
}











