import styles from './Header.module.css'
import Logo from '../../assets/img/Logo.png'
import {useEffect} from "react";
import {authAPI} from "../../api/api";




const Header = (props) => {
    useEffect(()=>{
                authAPI.me()
                    .then(response=>{
                        const {id,login,email,isAuth} = response.data.data
                        props.getUserData(id,login,email,isAuth)
                    })
    })
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
            {props.isAuth ? <div>
                <button>LogIN</button>
            </div> :
            <div>
                <button>LogOUT</button>
            </div>}
        </header>
    )
}


export default Header