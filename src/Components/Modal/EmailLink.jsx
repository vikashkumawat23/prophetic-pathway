import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EmailLink(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
       className='new_modal'
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>Email Sent</h4>
        <p>
        We sent an email to XXXXX01@gmail.com
        with a link to reset your password
        </p>
      </Modal.Body>
 
    </Modal>
  );
}

export default EmailLink;