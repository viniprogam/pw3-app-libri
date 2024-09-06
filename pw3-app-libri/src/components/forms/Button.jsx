import styles from './Button.module.css';

export default function Button({rotulo}) {
    return (
        <div>
            <button>{rotulo}</button>
        </div>
    )
}