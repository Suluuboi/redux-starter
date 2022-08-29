import reducer from './store/reducer';
import { projectAdded } from './store/projects';
import {bugAdded, bugRemoved, bugResolved, getUnresolvedBugs} from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

console.log("Hello World!");
store.subscribe((a)=>{
    console.log(`change`);
})

store.dispatch(projectAdded({name: "Food"}))
store.dispatch(bugAdded({description:"Bug 1"}));
store.dispatch(bugAdded({decription:"Bug 2"}));
store.dispatch(bugAdded({description: "Bug 3"}));
store.dispatch(bugAdded({description: "Bug 4"}));
store.dispatch(bugResolved({id:1}));
//store.dispatch(action.bugRemoved(2))

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x===y)