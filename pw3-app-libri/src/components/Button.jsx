import style from './Button.module.css';

const Button = ({label}) => {
    return (
        <div>
            <button className={style.button}><p>{label}</p></button>
        </div>
    )
}

export default Button