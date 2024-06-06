import {MyCalendar} from "./components/ui/myCalendar";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}> <MyCalendar/></LocalizationProvider>

    );
}

export default App



