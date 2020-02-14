import React, { Component } from 'react';
import {connect} from'react-redux'
import {updateRow} from '../../Actions/index'
export class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
            txtName:this.props.element.name,
            status: this.props.element.status
        }
    }
    onSubmit =(event)=>{
        event.preventDefault();
        var obj ={
            id : this.props.element.id,
            name : this.state.txtName,
            status: this.state.status
        }
        // this.props.changeStateRow(this.state.txtName,this.state.status)
        // this.props.onEdit(obj)
        this.props.updateRow(obj)
        console.log("---------btn add")
    }
    handleChange=(event)=>{
        var name = event.target.name;
        var value= event.target.value;
        if(name === "status"){
            value = value === "true" ? true : false;
        }
        this.setState({
            [name] : value
        })
        console.log(value);
    }

    render() {
        console.log("---------Form edit")
        return (
            <div>
                 <form onSubmit={this.onSubmit} >
                            <div className="form-group">

                                <label >Tên</label>
                                <input  value={this.state.txtName} name="txtName" className="form-control" onChange={this.handleChange} />
                               

                            </div>
                            <div className="form-group">
                                <label>
                                    Trạng thái
                                </label>
                                <div >
                                    <select name="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
                                        <option value={false}>Ẩn</option>
                                        <option value={true}>Kích hoạt</option>


                                    </select>

                                </div>

                            </div>
                            
                            <div className="d-flex justify-content-around">
                                <button onClick={this.props.btnCancle} type="submit" className="btn btn-success col-sm-4">YES</button>
                                <div onClick={this.props.btnCancle} className="btn btn-danger col-sm-4" >Cancel</div>
                            </div>
                            
                        </form>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch, props)=>{
    return {
        updateRow : (element)=>{
            dispatch(updateRow(element))
        }
    }
}
export default (connect(null, mapDispatchToProps))(FormEdit);
