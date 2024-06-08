import {ComponentPropsWithoutRef} from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
    isBorder?: boolean
}

export const Card = ({isBorder = false, className, ...rest }:CardProps) => {
    const cardClassNames = classNames(styles.card, {
        [styles.withBorder]: isBorder,
        [className || '']: className,
    });

    return (
        <div className={cardClassNames} {...rest}></div>
    );
};
