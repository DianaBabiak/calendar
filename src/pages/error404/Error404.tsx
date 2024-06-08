import s from './error404.module.scss'

import img from '../../assets/404.svg'

export const Error404 = () => {
    return (
        <div className={s.wrapper}>
            <img alt={'error-404'} src={img} />
            <p className={s.text}>
                Sorry! Page not found!
            </p>
            <a  href={'/'}>
                Back to home page
            </a>
        </div>
    )
}