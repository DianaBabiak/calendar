import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import {Event} from "@/types/calendar.ts";
import {useTranslation} from 'react-i18next';
import {FORMAT_DATE} from "@/components/infoEventModal/constants.ts";
import {Modal} from "@/components/ui/modal";

interface InfoEventModalProps {
    open: boolean
    setOpen: (open: boolean) => void;
    event: Event | null
    handleDeleteEvent: (eventId: string) => void
    handleOpenEditModal: (eventId: string) => void
    handleClose: () => void

}

export const InfoEventModal = ({
                                   open,
                                   setOpen,
                                   event,
                                   handleDeleteEvent,
                                   handleOpenEditModal,
                                   handleClose
                               }: InfoEventModalProps) => {
    const {t} = useTranslation()
    const formattedStart = event?.start.toLocaleTimeString([], FORMAT_DATE)
    const formattedEnd = event?.end.toLocaleTimeString([], FORMAT_DATE)
    const handleDelete = () => {
        if (event) {
            handleDeleteEvent(event.id)
        }
    }

    const handleOpenModal = () => {
        if (event) {
            handleOpenEditModal(event.id)
        }
    }
    return (
        <Modal open={open} setOpen={setOpen}>
            <DialogTitle>{t('events.event_info')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`${formattedStart}-${formattedEnd} ${event?.title}`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t('events.close')}</Button>
                <Button onClick={handleDelete}>{t('events.delete')}</Button>
                <Button onClick={handleOpenModal} autoFocus>
                    {t('events.edit')}
                </Button>
            </DialogActions>
        </Modal>
    );
};
