import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from "react";
import styles from "./calendarPage.module.scss"
import {Button} from "@/components/ui/button";
import {MyCalendar} from "../../components/myCalendar";
import {LESSON_ITEMS} from "@/pages/calendar/constants.ts";

export const CalendarPage = ()=>{
    const [lesson, setLesson] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLesson(event.target.value);
    };

    return (
        <Container maxWidth="md" style={{marginTop:'15px'}}>
            <div className={styles.container}>
                <FormControl sx={{ m: 1, minWidth: 200, margin:0 }} size="small">
                    <InputLabel >Выбрать предмет</InputLabel>
                    <Select
                        labelId="предмет"
                        id="предмет"
                        value={lesson}
                        label="Выбрать предмет"
                        onChange={handleChange}
                    >
                        {LESSON_ITEMS.map(les=><MenuItem value={les.id}>{les.title}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button size={'large'} className={styles.button} >Изменить расписание</Button>
            </div>
            <MyCalendar/>
        </Container>
    )
}