import * as Type from '../Constants/Action'
var initState = ""
const myReducer = (state = initState, action)=>{
    if(action.type === Type.SEARCH )
    {
        var {txtSearch} = action;
        return  txtSearch;
    }
    return state;
}
export default myReducer;