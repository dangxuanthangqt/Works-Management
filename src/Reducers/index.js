import {combineReducers} from 'redux'
import tasks from './tasks'
import toggle_form from './toggle_form';
import  txt_search from './txt_search'
import value_sort from './sort'
import test from './test'
const myReducer = combineReducers({
    tasks : tasks, 
    toggle_form : toggle_form,
    txt_search :txt_search,
    value_sort: value_sort,
    test:test
    

})
export default myReducer;