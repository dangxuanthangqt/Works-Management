
import {Modal, Button} from "react-bootstrap";
import React from 'react'
import {connect} from 'react-redux'
import {deleteRow} from '../../Actions/index'
function Example(props) {
    const [smShow, setSmShow] = React.useState(false);
    const {id} = props;
    var onClick =()=>{
      props.deleteRow(id)
        setSmShow(false)
    }
    //console.log("modal----delete")

    return (
      <>
        
        <button onClick={() => setSmShow(true)} type="button" className="btn btn-outline-danger ">Delete</button>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
       
        >
          <Modal.Header  >
              <div className="col-sm-12 d-flex justify-content-center">
              <h1 className="text-danger">Delete <i className="fa fa-trash" aria-hidden="true"></i></h1>
              </div>
           
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
              <Button onClick={()=>{ onClick()}} className="col-sm-4">YES</Button>
              &nbsp;
              <Button onClick={() => setSmShow(false)}  className="col-sm-4">CENCEL</Button>
          </Modal.Body>
        </Modal>
        
      </>
    );
  }
  const mapDispatchToProps = (dispatch, props)=>{
    return {
        deleteRow : (id)=>{
          dispatch(deleteRow(id))
        }
    }
  }
  export default connect(null,mapDispatchToProps)(Example);