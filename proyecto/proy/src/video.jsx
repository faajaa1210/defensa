import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleVerVideo = () => {
    // Redirige a la URL del video de YouTube
    window.open('https://youtu.be/bGk9W65vXNA', '_blank');
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Primera Generacion</ModalHeader>
        <ModalBody>
          Quieres ver el video referente a la primera generacion
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleVerVideo}>
            Ver video
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;