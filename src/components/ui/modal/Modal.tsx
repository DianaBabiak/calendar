import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormEvent, useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    handleAddEvent: (newTitle: string, start: Date, end: Date) => void;
}

export const Modal = ({ open, setOpen, handleAddEvent }: ModalProps) => {
    const [title, setTitle] = useState<string>("");
    const [start, setStart] = useState<Date | null>(new Date());
    const [end, setEnd] = useState<Date | null>(new Date());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (start && end && title) {
            handleAddEvent(title, start, end);
            setOpen(false);
        }
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Новое событие</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
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
                            />
                            <DateTimePicker
                                label="Конец события"
                                value={end}
                                onChange={(date) => setEnd(date)}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Закрыть</Button>
                        <Button type="submit">Записать</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
