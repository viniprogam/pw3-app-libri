import styles from './Select.module.css';

export default function Select({name, text, options}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione um categoria</option>
                {
                    options.map(option => {
                        // console.log(option.nome_categoria)
                        return <option>{option.nome_categoria}</option>
                    })
                }
            </select>
        </div>
    )
}