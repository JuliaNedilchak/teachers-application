
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import css from './BoookingModal.module.css';
const modalRoot=document.getElementById('modal-root') || document.body;
const BookingModal = ({teacher, onClose}) => {
useEffect(()=>{
    const onKeyDown=(e)=>{
        if(e.key==='Escape')
            onClose();
    };

    window.addEventListener('keydown',onKeyDown);
    return()=>window.removeEventListener('keydown', onKeyDown);
}, [onClose]);
const onBackdropClick=(e)=>{
    if(e.target===e.currentTarget)
        onClose();
}
  return createPortal (
    <div className={css.backdrop} onClick={onBackdropClick}
    role='dialog' aria-modal='true'>
    <div className={css.modal}>
        <button type='button' className={css.closeBtn} onClick={onClose} aria-label='Close'>X</button>
    </div>
      
    </div>,
    modalRoot
  )
}

export default BookingModal
