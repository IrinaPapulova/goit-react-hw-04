import Modal from "react-modal";

import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, modalImg, closeModal, alt }) {
  Modal.setAppElement(document.body);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <img src={modalImg} alt={alt} width="800" height="600" />
        <p className={css.text}>{alt}</p>
      </Modal>
    </div>
  );
}
