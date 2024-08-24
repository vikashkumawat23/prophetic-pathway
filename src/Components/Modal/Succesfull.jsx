import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Succesfull(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
       className='new_modal successfull_modal'
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h6>
        Password has been successfully reset.
        </h6>


        <div className=' d-flex justify-content-center'>
    <Link className='btn_390 Link_btn mt-2'>Login</Link>
       </div>

      </Modal.Body>
 
    </Modal>
  );
}

export default Succesfull;