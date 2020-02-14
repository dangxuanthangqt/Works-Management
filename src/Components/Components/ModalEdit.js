
import {Modal} from 'react-bootstrap'
import React from 'react'
import FormEdit from './FormEdit';

function ModalEdit(props) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log("---------MOdalEit")
    return (
      <>
        <button  onClick={handleShow} type="button" className="mr-1 btn btn-outline-warning ">Edit</button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
          <div className="col-sm-12 d-flex justify-content-center">
              <h3 className="text-danger"><i className="fa fa-pencil-square" aria-hidden="true"></i> EDIT </h3>
              </div>
          </Modal.Header>
          <Modal.Body>
              <FormEdit changeStateRow={props.changeStateRow} onEdit={props.onEdit} btnCancle={ handleClose} element={props.element}></FormEdit>
            </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }

  export default ModalEdit;