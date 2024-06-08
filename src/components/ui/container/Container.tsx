import {ComponentPropsWithoutRef} from 'react';
import classNames from 'classnames';
import styles from './container.module.scss';

export interface ContainerProps extends ComponentPropsWithoutRef<'main'> {
}

export const Container = ({className, ...rest }:ContainerProps) => {

    const containerClassNames = classNames(styles.container, className)

    return (
        <main className={containerClassNames} {...rest}></main>
    );
};
