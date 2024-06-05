
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ru from 'date-fns/locale/ru';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
    'ru': ru,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: 'Конференция',
        start: new Date(2023, 5, 5, 10, 0),
        end: new Date(2023, 5, 5, 12, 0),
    },
];

const MyCalendar = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                culture='ru'
            />
        </div>
    );
};

function App() {


    return (
        <MyCalendar/>
    );
}

export default App



