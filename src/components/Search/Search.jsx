import styles from './Search.module.css'
import cn from 'classnames'

const Search = (props) => {
    const {value, onChange, children = 'Search', placeholder = 'search...'} = props

    const inputClass = cn({
        [styles.input]: true,
        [styles.filled]: value.length
    })
    return (
        <label className={styles.label}>
            {children}
            <input type="text" placeholder={placeholder} onChange={onChange} value={value} className={inputClass}/>
        </label>
    )
}

export default Search