
import * as Types from '../Constants/Action'
export const listAll =()=>{
    return {
        type: Types.LIST_ALL
    }
}
export const addTask =(task)=>{
    return {
        type: Types.ADD_TASK,
        task : task
    }
}
export const closeForm=()=>{
    return {
        type: Types.CLOSE_FORM,
    }
}
export const openForm =()=>{
    return {
        type: Types.OPEN_FORM,
        
    }
}
export const toggleForm =(task)=>{
    return {
        type: Types.TOGGLE_FORM,
    }
}
export const toggleStatus = (element)=>{
    return {
        type: Types.TOGGLE_STATUS,
        element: element
    }
}
export const rgData = (data)=>{
    return {
        type: Types.RESET_GENERATE_DATA,
        data: data
    }
}
export const deleteRow = (id)=>{
    return {
        type: Types.DELETE,
        id : id
    }
}
export const updateRow =(element)=>{
    return {
        type : Types.UPDATE,
        element :element
    }
}

export const searchName=(txtSearch)=>{
    return {
        type : Types.SEARCH,
        txtSearch : txtSearch
    }
}
export const sortName=(value)=>{
    return {
        type :Types.SORT,
        value:value
    }
}
