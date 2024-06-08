import { CSSProperties } from '@/types/common';

const greyColor = '#ABB2B9'

export default {
    container: {
        margin:'0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth:'340px',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginBottom: '16px',
        fontSize:'35px',
        textAlign: 'left'
    },
    textField: {
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
            padding:'10px 12px'
        },
        '.MuiOutlinedInput-root': {
            borderRadius: '12px',
            maxHeight:'36px',
        }
    },
    rememberMeContainer: {
        marginBottom: '32px',
    },
    rememberMeLabel: {
        color: greyColor,
        fontSize:'12px'
    },
    checkbox: {
        '&.MuiCheckbox-root': {
            color: greyColor
        },
    },
    link: {
        fontSize:'16px',
        color: 'primary.main',
        '&:visited': {
            color: 'primary.main',
        },
    },
    link_black: {
        color: 'black',
        '&:visited': {
            color: 'black',
        }
    }
} as CSSProperties<'container'| 'formContainer' |'title' | 'textField' | 'rememberMeContainer' | 'rememberMeLabel' | 'checkbox' | 'link' | 'link_black'>;