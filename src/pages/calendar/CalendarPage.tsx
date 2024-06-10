import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from "react";
import styles from "./calendarPage.module.scss"
import {Button} from "@/components/ui/button";
import {MyCalendar} from "@/components/myCalendar";
import {LESSON_ITEMS} from "@/pages/calendar/constants.ts";
import {Container} from "@/components/ui/container";
import { useTranslation } from 'react-i18next'

export const CalendarPage = ()=>{
    const [lesson, setLesson] = useState('')
    const { t } = useTranslation()


    const handleChange = (event: SelectChangeEvent) => {
        setLesson(event.target.value);
    };

    return (
        <Container className={styles.mainContainer}>
            <div className={styles.container}>
                <FormControl sx={{ m: 1, minWidth: 200, margin:0 }} size="small">
                    <InputLabel >{t('calendar.select_subject')}</InputLabel>
                    <Select
                        labelId="предмет"
                        id="предмет"
                        value={lesson}
                        label="Выбрать предмет"
                        onChange={handleChange}
                    >
                        {LESSON_ITEMS.map(les=><MenuItem key={les.id} value={les.id}>{les.title}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button size={'large'} className={styles.button} >{t('calendar.change_schedule')}</Button>
            </div>
            <MyCalendar/>
        </Container>
    )
}