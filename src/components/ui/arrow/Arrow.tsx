import styles from './arrow.module.scss';

interface ArrowProps {
    direction: 'left' | 'right'
    onClick: () => void
}

export const Arrow = ({direction, onClick}: ArrowProps) => {
    return (
        <div
            className={styles.arrow}
            onClick={onClick}
        >
            {direction === 'left' ? '←' : '→'}
        </div>
    )
}

