import { CSSProperties } from "@/types/common";

export default {
    container: {
        display: 'flex',
        minHeight: '100vh',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    }
} as CSSProperties<'container' | 'main'>;