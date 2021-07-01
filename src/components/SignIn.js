import React from "react";
import Modal from "react-bootstrap/Modal";

const SignIn = () => {
  const MAX_LENGTH_LOGIN = 20;
  const MAX_LENGTH_PASSWORD = 20;

  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {setIsOpen(true)};
  const hideModal = () => {setIsOpen(false)};

  return(
    <>
      <button className="blue-button" onClick={showModal}>sign in</button>
      <Modal show={isOpen} onHide={hideModal} >
        <Modal.Header>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Login <input type="text" maxLength={MAX_LENGTH_LOGIN}/></label>
          <label>Password <input type="password" maxLength={MAX_LENGTH_PASSWORD}/></label>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>OK</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignIn;
