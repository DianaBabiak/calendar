import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormEvent, useEffect, useState} from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {DATE_TIME_FORMAT} from "../constant.ts";
import {Modal} from "../Modal.tsx";
import {Event} from "../../../myCalendar";

interface AddEditEventModalProps {
    open: boolean
    setOpen: (open: boolean) => void;
    modalTitle:string
    handleEvent: (title: string, start: Date, end: Date, eventId:string | undefined) => void
    selectedEvent: Event | null
}

export const AddEditEventModal = ({ open, setOpen, handleEvent, modalTitle, selectedEvent }: AddEditEventModalProps) => {
    const [title, setTitle] = useState<string>(selectedEvent?.title || "")
    const [start, setStart] = useState<Date | null>(new Date())
    const [end, setEnd] = useState<Date | null>(new Date())


    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (start && end && title) {
            handleEvent(title, start, end, selectedEvent?.id);
            setOpen(false);
        }
    }

    useEffect(() => {
        if (selectedEvent) {
            setStart(new Date(selectedEvent.start));
            setEnd(new Date(selectedEvent.end));
        }
    }, [selectedEvent])

    return (
        <Modal open={open} setOpen={setOpen}>
                <DialogTitle>{modalTitle}</DialogTitle>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'15px'}}>
                    <DialogContent style={{display:'flex', flexDirection:'column', gap:'20px', minWidth:'300px'}}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="title"
                            name="title"
                            label="Мероприятие"
                            fullWidth
                            variant="standard"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <DateTimePicker
                            label="Начало события"
                            value={start}
                            onChange={(date) => setStart(date)}
                            format={DATE_TIME_FORMAT.ru}
                        />
                        <DateTimePicker
                            label="Конец события"
                            value={end}
                            onChange={(date) => setEnd(date)}
                            format={DATE_TIME_FORMAT.ru}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Закрыть</Button>
                        <Button type="submit">Записать</Button>
                    </DialogActions>
                </form>
        </Modal>
    )
}
