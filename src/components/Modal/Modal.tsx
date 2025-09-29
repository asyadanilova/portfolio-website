import React, { useEffect } from 'react';
import Form from '../Form/Form';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    preselectedService?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, preselectedService }) => {
    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <i className="fas fa-times"></i>
                </button>
                <Form preselectedService={preselectedService} />
            </div>
        </div>
    );
};

export default Modal;