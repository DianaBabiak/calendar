import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {CalendarPage} from "./pages/calendarPage";

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}> <CalendarPage/></LocalizationProvider>

    )
}

export default App



