
import * as Types from '../Constants/Action'
var data = JSON.parse(localStorage.getItem("tasks") )
var initialState = data ? data : []
const myReducer =( state = initialState, action) =>{
    if(action.type === Types.LIST_ALL)
    {
        return state;
    }
    if(action.type === Types.ADD_TASK)
    {
        var {task} = action;
        var temp = [...state];
        temp.push(task)

        localStorage.setItem("tasks",JSON.stringify(temp));
        return temp
        
    }
    if(action.type === Types.TOGGLE_STATUS){
       
        console.log(action)
        var {element} = action;
        console.log(element)
        let temp = [...state];
        console.log(state)
        temp.forEach((e, index) => {
            if(e.id === element.id)
            {
                
                
                temp[index] = {
                    id:element.id,
                    name: element.name,
                    status : !e.status
                }
            }
        });
        localStorage.setItem("tasks",JSON.stringify(temp))
        return temp;

    }
    if(action.type === Types.RESET_GENERATE_DATA){
        
        var {data} = action;
        localStorage.setItem("tasks", JSON.stringify(data))
        return  data;
    }
    if(action.type === Types.DELETE)
    {
        var {id} = action;
        let temp = [...state];
        temp.forEach((e, index)=>{
            if(e.id === id){
                temp.splice(index, 1)
            }
        })
        localStorage.setItem("tasks", JSON.stringify(temp))
        return temp;
    }
    if(action.type === Types.UPDATE){
        let {element} = action;
        let temp = [...state]
        temp.forEach((E, index)=>{
            if(E.id === element.id){
                temp[index] = element
            }
        })
        localStorage.setItem("tasks", JSON.stringify(temp))
        return temp;
    }
 
    return state;
}
export default myReducer;