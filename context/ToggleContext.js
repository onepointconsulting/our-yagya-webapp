import { useState } from 'react';
import { createContext } from 'react';

//create the context
export const ToggleContext = createContext();

// define the handleOpen and handleClose functions
export function useToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return { isOpen, handleOpen, handleClose }
}
