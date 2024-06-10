import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {SyntheticEvent} from "react";
import {useAppDispatch} from "@/state/store.ts";
import {clearError} from "@/state/app/appSlice.ts";



interface  CustomizedSnackbarsProps {
    isOpen:boolean
    error:string | null
}
export  const CustomizedSnackbars= ({isOpen, error}:CustomizedSnackbarsProps)=> {
    const dispatch = useAppDispatch()
    const handleClose = (_:SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(clearError())
    };

    return (
        <div>
            <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}