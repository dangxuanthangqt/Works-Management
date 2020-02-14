import * as Types from '../Constants/Action'

var initState= 2;
const myReducer = (state = initState, action)=>{
    if(action.type === Types.SORT){
        var {value} = action;
        return value;
    }
  
    return state;
}
export default myReducer;