import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import Modal from 'react-modal';

const DraggableCard = ({ id, initialText }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [text] = useState(initialText);

  const handleShowMore = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Draggable>
      <ResizableBox width={200} height={100}>
        <div style={{ border: '1px solid black', padding: '10px', backgroundColor: 'white' }}>
          <p>{text.substring(0, 50)}...</p>
          <button onClick={handleShowMore}>Show More</button>

          <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
            <h2>Card Details</h2>
            <p>{text}</p>
            <button onClick={handleCloseModal}>Close</button>
          </Modal>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default DraggableCard;
