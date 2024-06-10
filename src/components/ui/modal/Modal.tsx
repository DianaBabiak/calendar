import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {ReactNode} from 'react';

interface ModalProps {
    open: boolean
    setOpen: (open: boolean) => void
    children: ReactNode
}

export const Modal = ({open, setOpen, children}: ModalProps) => {
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                {children}
            </Dialog>
        </>
    )
}
