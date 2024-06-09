import { Outlet } from 'react-router-dom'
import Box from "@mui/material/Box";
import s from "./styles";
import { MENU_ITEMS } from "@/constants/menu";
import {Navbar} from "@/components/ui/navbar";

export const Layout = () => {
    return (
        <Box sx={s.container}>
            <Box component="nav">
                <Navbar items={MENU_ITEMS} />
            </Box>
            <Box component="main" sx={s.main}>
                <Box component="header">Header</Box>
                <Box><Outlet /></Box>
            </Box>
        </Box>
    );
};