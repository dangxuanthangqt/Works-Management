import React, { Component } from 'react';
import randomstring from 'randomstring'
import {connect} from 'react-redux'
import {addTask} from '../../Actions/index'
import { closeForm } from '../../Actions/index';
export class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: "",
            selected: true
        }

        this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        var value = target.value;
        if (name === "selected") {
            value = value === "true" ? true : false
        }
        
        this.setState({
            [name]: value
        });
        //console.log(this.state.txtName)
        // console.log(typeof(event.target.value));
         
    }
    onSubmit = (event) => {
        event.preventDefault();

        var obj = {
            id: randomstring.generate(),
            name: this.state.txtName,
            status: this.state.selected
        }
        //this.props.submit(obj)
        this.props.addTask(obj)
        this.props.closeForm();
        
    }

    render() {
       // console.log(this.state.txtName + "---" + this.state.selected)

        return (
            <div className="col-sm-4">
                <div className="card border-primary ">

                    <div className="bg-primary p-2">THÊM CÔNG VIỆC
                        <div className="float-right">
                            <button type="button" className="close" aria-label="Close" onClick={this.props.closeForm}>
                                <span className="hover" aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>
                    <div className="p-2">
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">

                                <label htmlFor="exampleInputEmail1 ">Tên</label>
                                <input  value={this.state.txtName} name="txtName" className="form-control" aria-describedby="emailHelp" onChange={this.handleChange} />
                                {
                                    this.state.txtName.length === 0 ? <small id="emailHelp" className="form-text text-muted text-danger ">
                                        <p className="text-danger">Vui lòng nhập tên &nbsp; <i className="fa fa-pencil" aria-hidden="true" />
                                        </p>
                                    </small> : ""
                                }

                            </div>
                            <div className="form-group">
                                <label>
                                    Trạng thái
                                </label>
                                <div >
                                    <select name="selected" className="form-control" value={this.state.selected} onChange={this.handleChange}>
                                        <option value={false}>Ẩn</option>
                                        <option value={true}>Kích hoạt</option>


                                    </select>

                                </div>

                            </div>
                            <div className="d-flex justify-content-around">
                                <button type="submit" className="btn btn-success"><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
                                <button className="btn btn-danger " onClick={this.props.closeForm}>Cancel</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        addTask : (task)=>{
            dispatch(addTask(task))
        },
        closeForm : ()=>{
            dispatch(closeForm())
        }
    }
}
export default connect(null, mapDispatchToProps)(FormInput);
