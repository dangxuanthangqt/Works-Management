import * as Type from '../Constants/Action'
var initState = false;
var myReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.CLOSE_FORM:
            return false;
        case Type.OPEN_FORM:
            return true;
        case Type.TOGGLE_FORM:
           return !state;
        default:
            // console.log("+++++++++++++++++++++++++++++++++++++++++++")
            // console.log(state)
            // console.log("+++++++++++++++++++++++++++++++++++++++++++")
            return state;
    }
    
}
export default myReducer;