import Container from '@mui/material/Container';
import {MyCalendar} from "../../components/ui/myCalendar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import {useState} from "react";
import styles from "./calendarPage.module.scss"

const lessons = [{id:1,title:'Подготовка к школе'},{id:2,title:'Ментальная математика'},{id:3,title:'Рисование'},{id:4,title:'Скорочтение'} ]
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
                        {lessons.map(les=><MenuItem value={les.id}>{les.title}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button variant="contained" style={{background:'#DECFFF', width:'344px',borderRadius:'30px', color:'#323854', fontSize:'16px', boxShadow: 'none',}} >Изменить расписание</Button>

            </div>
            <MyCalendar/>
        </Container>
    )
}