import { CSSProperties } from "@/types/common";

export default {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '190px',
        padding: '8px 8px 8px 48px',
        borderRadius: '0 20px 20px 0',
    },
    text: {
        marginLeft: '8px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
} as CSSProperties<'wrapper' | 'text'>;