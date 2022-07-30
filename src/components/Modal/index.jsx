import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css'


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handlBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.handlBackdropClick}>
        <div className={styles.modal}>
          <img src={this.props.largePicuretoModal} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}