import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import css from './BookingModal.module.css';


const modalRoot=document.getElementById('modal-root');

const BookingModal = ({isOpen, onClose,children}) => {
    useEffect(()=>{
      if(!isOpen) return;
        const onKeyDown=(e)=>{
            if(e.key==='Escape') onClose();
        }
        window.addEventListener('keydown',onKeyDown);

        const prevOverflow= document.body.style.overflow;
        document.body.style.overflow='hidden';
        return()=>{
            window.removeEventListener('keydown',onKeyDown);
        document.body.style.overflow=prevOverflow;}
    },[isOpen, onClose]);
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
