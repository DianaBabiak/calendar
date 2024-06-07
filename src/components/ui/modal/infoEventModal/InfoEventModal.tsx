import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import {Modal} from "../Modal.tsx";
import {Event} from "../../myCalendar";

interface InfoEventModal {
    open: boolean
    setOpen: (open: boolean) => void;
    event:Event | null
    handleDeleteEvent:(eventId: string )=>void
    handleOpenEditModal:(eventId: string)=>void
    handleClose:()=>void

}

export const InfoEventModal = ({ open, setOpen, event, handleDeleteEvent, handleOpenEditModal, handleClose}: InfoEventModal) => {
    const handleDelete =()=>{
        if(event){
            handleDeleteEvent(event.id)
        }
    }

    const handleOpenModal = ()=>{
        if(event){
            handleOpenEditModal(event.id)
        }
    }
    return (
        <Modal open={open} setOpen={setOpen}>
            <DialogTitle>Информация о событии</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {event?.title}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Закрыть</Button>
                <Button onClick={handleDelete}>Удалить</Button>
                <Button onClick={handleOpenModal} autoFocus>
                    Редактировать
                </Button>
            </DialogActions>
        </Modal>
    );
};
