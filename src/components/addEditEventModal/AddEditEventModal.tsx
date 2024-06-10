import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormEvent, useEffect, useState} from 'react';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {Event, EVENT_STATUS, EventStatus} from '@/types/calendar.ts';
import {useTranslation} from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import s from "./styles.ts"
import styles from "./addEditEventModal.module.scss"
import {DATE_TIME_FORMAT} from "@/components/ui/modal/constant.ts";
import {Modal} from "@/components/ui/modal";

interface AddEditEventModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    modalTitle: string;
    handleEvent: (
        title: string,
        start: Date,
        end: Date,
        isPay: boolean,
        status: EventStatus,
        eventId: string | undefined
    ) => void;
    selectedEvent: Event | null;
}

export const AddEditEventModal = ({
                                      open,
                                      setOpen,
                                      handleEvent,
                                      modalTitle,
                                      selectedEvent,
                                  }: AddEditEventModalProps) => {
    const [title, setTitle] = useState<string>(selectedEvent?.title || '');
    const [start, setStart] = useState<Date | null>(new Date());
    const [end, setEnd] = useState<Date | null>(new Date());
    const [isPay, setIsPay] = useState<boolean>(selectedEvent?.isPay || false);
    const [status, setStatus] = useState<EventStatus>(selectedEvent?.status || EventStatus.Planned);

    const {t} = useTranslation()

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (start && end && title) {
            handleEvent(title, start, end, isPay, status, selectedEvent?.id)
            setOpen(false)
        }
    }

    useEffect(() => {
        if (selectedEvent) {
            setTitle(selectedEvent.title)
            setStart(new Date(selectedEvent.start))
            setEnd(new Date(selectedEvent.end))
            setIsPay(selectedEvent.isPay)
            setStatus(selectedEvent.status)
        }
    }, [selectedEvent])

    return (
        <Modal open={open} setOpen={setOpen}>
            <DialogTitle>{t(modalTitle)}</DialogTitle>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <DialogContent sx={s.dialogContent}>
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
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="status-label">Статус</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value as EventStatus)}
                        >
                            <MenuItem value={EventStatus.Planned}>{EVENT_STATUS[EventStatus.Planned]}</MenuItem>
                            <MenuItem value={EventStatus.Conducted}>{EVENT_STATUS[EventStatus.Conducted]}</MenuItem>
                            <MenuItem
                                value={EventStatus.Cancellation}>{EVENT_STATUS[EventStatus.Cancellation]}</MenuItem>
                            <MenuItem value={EventStatus.Skip}>{EVENT_STATUS[EventStatus.Skip]}</MenuItem>
                            <MenuItem value={EventStatus.Available}>{EVENT_STATUS[EventStatus.Available]}</MenuItem>
                            <MenuItem value={EventStatus.Busy}>{EVENT_STATUS[EventStatus.Busy]}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox checked={isPay} onChange={(e) => setIsPay(e.target.checked)}/>}
                        label="Оплачено"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('events.close')}</Button>
                    <Button type="submit">{t('events.save')}</Button>
                </DialogActions>
            </form>
        </Modal>
    )
}
