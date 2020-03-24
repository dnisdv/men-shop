import React , {useEffect} from 'react'
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal-root');

const Modal = ({ModalState, children}) => {

    const el = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => modalRoot.removeChild(el);
    }, [el, modalRoot]);
    
    return ModalState ? createPortal(children, el) : null
}

export default Modal