import Box from "@mui/material/Box";
import { MenuItem } from "@/types/menu";
import {NavbarItem} from "@/components/ui/navbar/navbarItem";

interface NavbarProps {
    items: MenuItem[];
}

export const Navbar = ({ items }: NavbarProps) => {
    return (
        <Box>
            <Box className="menu-list">
                {items.map((item) => (
                    <NavbarItem key={item.name} item={item} />
                ))}
            </Box>
        </Box>
    );
};