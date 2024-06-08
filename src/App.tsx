import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Router } from '@/router'



function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Router />
        </LocalizationProvider>


    )
}

export default App



