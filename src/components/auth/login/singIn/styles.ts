import {CSSProperties} from '@/types/common';

const greyColor = '#ABB2B9'

export default {
    textField: {
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '10px 12px'
        },
        '.MuiOutlinedInput-root': {
            borderRadius: '12px',
            maxHeight: '36px',
        }
    },
    rememberMeContainer: {
        marginBottom: '32px',
    },
    rememberMeLabel: {
        color: greyColor,
        fontSize: '12px'
    },
    checkbox: {
        '&.MuiCheckbox-root': {
            color: greyColor
        },
    },

} as CSSProperties<'textField' | 'rememberMeContainer' | 'rememberMeLabel' | 'checkbox'>;