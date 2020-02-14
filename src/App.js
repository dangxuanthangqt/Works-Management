

import './App.css';
import FormInput from './Components/Components/FormInput';
import Table from './Components/Components/Table';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks:[],
      //enableForm : false,
      itemUpdate : {}
    }
   
  }
 
  // UNSAFE_componentWillMount(){
  //   if(localStorage && localStorage.getItem("tasks")){
  //     this.setState({
  //       tasks : JSON.parse(localStorage.getItem("tasks"))
  //     })
  //   }
  // }
  // closeForm =()=>{
  //   this.setState({
  //     enableForm: false
  //   })
  // }
  // enableForm=()=>{

  //   this.setState({
  //     enableForm: true
  //   })
  // }
  
  onSubmit=(obj)=>{
    var list = this.state.tasks;
    list.push(obj)
    this.setState({
      tasks : list
    })
      console.log(this.state.tasks);
    
     
  }
  onEdit=(obj)=>{
    console.log(obj)
    var list= this.state.tasks;
    var itemUpdate ;
    list.forEach((e, index)=>{
      if(e.id === obj.id){
        list[index] = obj;
        itemUpdate = list[index];
      }
    })
    this.setState({
      tasks : list,
      itemUpdate : itemUpdate
    })
   // localStorage.setItem("tasks",this.state.tasks)
   localStorage.setItem("tasks",JSON.stringify(list));
  }
  // deleteRow =( id )=> {
  //   var list = this.state.tasks;
  //   list.forEach((e, index) =>{
  //     if (e.id === id){
  //       list.splice(index, 1)
  //     }
  //   })
  //   this.setState({
  //     tasks: list
  //   })
  //   //localStorage.setItem("tasks",this.state.tasks)
  //  // localStorage.setItem("tasks",JSON.stringify(this.state.tasks));
  // }
  componentDidMount(){
   
    console.log("--------- didmount app")
    console.log(this.state.tasks )
    console.log("--------- didmount app")
  }
  componentDidUpdate (){
    if(this.state.isUpdate === true)
    {
      this.setState({
        isUpdate :false
      })
    }
  }
  update=()=>{
   
  }
  render() {
    console.log(this.state.tasks)
    //localStorage.setItem("tasks",JSON.stringify(this.state.tasks));
    // var {tasks } = this.state;
    console.log(this.props.toggleForm)
    console.log("render APP")
    return (
      <div>





        
        <div >
          <nav className="navbar navbar-light bg-light row justify-content-center">
            <div style={{ fontSize: 30 }} className="navbar-brand text-center"> Quản lý công việc </div>
          </nav>
          <div className="container mt-3">
            <div className="row">
              
                  {
                    this.props.toggleForm === true ? <FormInput  submit={this.onSubmit}  ></FormInput> : ""
                  }
                
              
              <div className={this.props.toggleForm === false ? "col-sm-12" : "col-sm-8"}>
                <Table
                itemUpdate ={this.state.itemUpdate} 
                onEdit={this.onEdit} 
                
                
                
                enableForm={this.enableForm}></Table>
              </div>
            </div>

          </div>

          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
      toggleForm: state.toggle_form
  }
}

export default connect(mapStateToProps,null)(App);
