import React, { Component } from 'react';
import Row from './Row';

import { connect } from 'react-redux';
import { tasks } from './data'
import { toggleForm, rgData, searchName , sortName} from '../../Actions/index';
export class Table extends Component {


    constructor(props) {
        console.log("contructor: table");
        super(props);
        this.state = {

            txtSearch: "",
            txtSearchFilter: "",
            selected: "all",


        }

    }
    // resetAdd =()=>{
    //     this.setState({
    //         list : this.props.data
    //     })
    // }
    // componentWillMount() {

    //     console.log("willmount table")
    // }

    // shouldComponentUpdate(nextprops, nextstate) {

    //     // var text = nextstate.txtSearchFilter;
    //     // text = text.toUpperCase()
    //     // var a = this.props.data;
    //     // a = a.filter((e) => {
    //     //     return (e.name.toUpperCase().indexOf(text) !== -1)
    //     // })
    //     //LIST = a;

    //     console.log("shouldComponentUpdate" + nextstate.txtSearchFilter)

    //     return true
    // }
    handleOnClick = (value) => {
       this.props.sortName(value)
    }

    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
       
        console.log(value)

        this.setState({
            [name]: value,

        })


    }


    handleSubmit = (event) => {
        event.preventDefault();

        var text = this.state.txtSearch;
        this.props.searchName(text)

    }

    handleGanerate = () => {
        this.props.rgData(tasks)
    }
    render() {
       
        var data1 = this.props.data
        
        
        if(this.props.value_sort === 1){
           
            data1 = data1.sort((a, b)=>{
                if(a.name > b.name){ return 1}
                else return -1
            })
        }else if(this.props.value_sort === -1)
        {
            data1 = data1.sort((a, b)=>{
                if(a.name < b.name){ return 1}
                else return -1
            })
        }
        if (this.state.txtSearchFilter.length !== 0) {
            data1 = data1.filter((e) => {
                return (e.name.toUpperCase().indexOf(this.state.txtSearchFilter.toUpperCase()) !== -1)
            })

            console.log(data1)
        }

        if (this.props.txtSearch.length > 0) {
            data1 = data1.filter((e) => {
                return (e.name.toUpperCase().indexOf(this.props.txtSearch.toUpperCase()) !== -1)
            })
        }
        if (this.state.selected === "true") {

            let temp = true;
            data1 = data1.filter((e) => {

                return (e.status === temp)
            }
            )
        } else if (this.state.selected === "false") {
            let temp = false;
            data1 = data1.filter((e) =>
                (
                    e.status === temp
                ))
        }
        // if(this.state.list.length > 0){
        //     data1 = this.state.list
        // }
        // console.log("---------table")
        // console.log(this.state.list.length); console.log(data1);
        // console.log("---------table")

        var list1 = data1.map((element, index) => {
            // console.log(element.name)
            return <Row

                itemUpdate={this.props.itemUpdate}


                index={index + 1} key={element.id}
                element={element}></Row>
        })

        return (
            <div >





                <div className="mb-3">
                    <div className="d-flex">
                        <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                            <input onChange={this.handleChange} name="txtSearch" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                        </form>
                        {/* <button className="ml-3 btn  my-2 my-sm-0 btn-primary" type="submit"> Sắp xếp  <i className="fa fa-sort"></i></button> */}
                        <button className="ml-3 btn  my-2 my-sm-0 btn-primary" type="submit"
                            onClick={this.props.toggleFormFunc}
                        ><i className="fa fa-plus" ></i> Thêm công việc</button>
                        &nbsp;&nbsp;
                        <button type="button" onClick={this.handleGanerate} className="btn btn-danger">Reset and Genarate Data</button>
                    </div>

                </div>
                <div className="">
                    <table className="table table-bordered col-md-12">


                        <thead >

                            <tr>
                                <th className="text-center">STT</th>
                                <th className="d-flex justify-content-center">
                                    <div className="row">
                                        <div>Tên &nbsp;</div>

                                        <input onChange={this.handleChange} value={this.state.txtSearchFilter} name="txtSearchFilter" className="rounded ml-2" type="search" placeholder="Lọc theo tên" aria-label="Search" />
                                        {/* <button onClick={this.handleSort} className="ml-2 rounded btn-primary" type="submit"> Sắp xếp  <i className="fa fa-sort-alpha-asc"></i>

                                
                                    </button> */}
                                    &nbsp;
                                        <div className="dropdown ">
                                            <button className="btn-primary rounded dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sắp xếp
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <span  onClick={()=>{this.handleOnClick(1)}} className="btn dropdown-item">Tên  <i className="fa fa-sort-alpha-asc"> &nbsp;&nbsp;&nbsp; {this.props.value_sort === 1 ? <i className="fa fa-check" aria-hidden="true"></i> :""}</i></span>
                                                <span href=""  onClick={()=>{this.handleOnClick(-1)}} className="btn dropdown-item">Tên  <i className="fa fa-sort-alpha-desc"> &nbsp;&nbsp;&nbsp; {this.props.value_sort === -1 ? <i className="fa fa-check" aria-hidden="true"></i> :""} </i></span>
                                                <span href=""  onClick={()=>{this.handleOnClick(2)}} className="btn dropdown-item">No sort&nbsp;&nbsp;&nbsp; {this.props.value_sort === 2 ? <i className="fa fa-check" aria-hidden="true"></i> :""}</span>
                                               
                                            </div>
                                        </div>
                                    </div>



                                </th>
                                <th className="text-center">Trạng thái &nbsp;
                                <select className="btn-primary rounded" name="selected" value={this.state.selected} onChange={this.handleChange}>
                                        <option value="true">Kích hoạt</option>
                                        <option value="false">Ẩn</option>
                                        <option value="all">Tất cả</option>

                                    </select>
                                </th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list1}

                        </tbody>
                    </table>
                </div>

                {/* <button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>

 
                <MyVerticallyCenteredModal
                   show={modalShow}
                   onHide={() => setModalShow(false)}
                /> */}


            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.tasks,
        toggleForm: state.toggle_form,
        txtSearch: state.txt_search,
        value_sort: state.value_sort,
        test : state.test // chu y ten khop state of store
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

        toggleFormFunc: () => {
            dispatch(toggleForm())
        },
        rgData: (tasks) => {
            dispatch(rgData(tasks))
        },
        searchName: (txtSearch) => {
            dispatch(searchName(txtSearch))
        },
        
        sortName: (value)=>{
            dispatch(sortName(value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
