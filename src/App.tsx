import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {CalendarPage} from "./pages/calendarPage";
import {MainPage} from "./pages/mainPage";


function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}> <MainPage/></LocalizationProvider>

    )
}

export default App



