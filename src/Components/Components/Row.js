import React, { Component } from 'react';
import Example from './ModalE';
import ModalEdit from './ModalEdit';
import {toggleStatus} from '../../Actions/index'
import { connect } from 'react-redux';
export class Row extends Component {
 
    handleonClick=()=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        this.props.toggle_satus(this.props.element)
    }
    display = (bol) => {
        if (bol === true) return <button onClick={this.handleonClick} className="btn btn-success rounded p-1" style={{ backgroundColor: "green" }}>Kích hoạt</button>
        else return <button onClick={this.handleonClick}  className="btn btn-danger rounded " style={{ backgroundColor: "orange" }} >Ẩn</button>
       
    }
    changeStateRow=(nameEdit, statusEdit)=>{
        this.setState ({
            name : nameEdit,
            status: statusEdit
        })
    }
    render() {
        // // console.log("row")
        // console.log("*************************************************")
        // console.log(this.props.itemUpdate)
        // console.log("*************************************************")
        var { element} = this.props;

        console.log(element)
        return (
            
            <tr>
                <td className="text-center">{this.props.index}</td>
                <td className="text-center">{element.name}</td>
                <td className="text-center">{this.display(this.props.element.status)}</td>
                <td className="text-center">
                    <ModalEdit changeStateRow={this.changeStateRow} onEdit={this.props.onEdit} element={element}></ModalEdit>




                    <Example id={element.id}> </Example></td>
            </tr>

        );
    }
}
const mapStateToProps = (state)=>{
    return {
        data : state.tasks,
        toggleForm: state.toggle_form // chu y ten
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        toggle_satus : (element)=>{
            dispatch(toggleStatus(element))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Row);
