import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {CalendarPage} from "./pages/calendarPage";
import {MainPage} from "./pages/mainPage";
import {SignIn} from "@/components/auth/login/singIn";


function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}> <SignIn/></LocalizationProvider>

    )
}

export default App



