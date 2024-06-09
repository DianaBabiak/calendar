import { Link, Typography } from '@mui/material';
import { MenuItem } from '@/types/menu'
import s from './styles'

interface NavbarItemProps{
    item: MenuItem
}


export const NavbarItem = ({ item }: NavbarItemProps) => {
    const {name, url, iconId} = item

    return (
        <Link href={url} sx={s.wrapper}>
            {iconId}
            <Typography sx={s.text}>{name}</Typography>
        </Link>
    );
};