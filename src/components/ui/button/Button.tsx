import {ComponentPropsWithoutRef} from 'react'
import classnames from 'classnames';

import styles from './button.module.scss'



interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    isFullWidth?: boolean;
    isFixedWidth?: boolean;
    size?:'small'| 'large'
}
export const Button  = ({children, className, isFullWidth, size='small',isFixedWidth, ...rest}: ButtonProps) => {
    const buttonClassName = classnames(
        styles[size],
        { [styles.fullWidth]: isFullWidth },
        { [styles.fixedWidth]: isFixedWidth },
        className,
        styles.buttonContainer
    )
        return (
            <button className={buttonClassName} {...rest}>
                {children}
            </button>
    )
    }
