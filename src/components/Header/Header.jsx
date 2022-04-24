import styles from './Header.module.css'
import Logo from '../../assets/img/Logo.png'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <div className={styles.title}>
                <h1>
                    Pirate's Harbor Project
                </h1>
                <p>Welcome to our harbor!</p>
            </div>
        </header>
    )
}


export default Header