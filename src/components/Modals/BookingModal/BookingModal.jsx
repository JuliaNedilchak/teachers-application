import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import css from './BookingModal.module.css';


const modalRoot=document.getElementById('modal-root');

const BookingModal = ({isOpen, onClose,children}) => {
    useEffect(()=>{
        const onKeyDown=(e)=>{
            if(e.target==='Escape') onClose();
        }
        window.addEventListener('keydown',onKeyDown);
        return()=>
            window.removeEventListener('keydown',onKeyDown);
    },[onClose]);
    if(!isOpen) return null;

    const onBackdropClick=(e)=>{
        if(e.target===e.currentTarget) onClose();
    }
    
  return createPortal (
    <div className={css.backdrop} onClick={onBackdropClick}
    role='dialog' aria-modal='true'>
      <div className={css.modal}>
        <button className={css.closeBtn} type='button' onClick={onClose} aria-label='Close modal'>X</button>
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default BookingModal
