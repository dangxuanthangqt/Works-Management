import {createStore} from 'redux'
var initialState = {
    status : false,
    sort :{
        by :"name",
        value:"1"
    }
}
var myReducer = (state = initialState, action)=>{
    if(action.type === "TOGGLE STATUS"){
        state.status = ! state.status
    }
    return state;
}
const store = createStore(myReducer)
console.log(store.getState())
var action = {
    type :"TOGGLE STATUS"
}
store.dispatch(action)
console.log(store);
