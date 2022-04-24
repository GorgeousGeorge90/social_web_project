import {NavLink} from "react-router-dom";
import styles from './Nav.module.css'

const activeStyle = {
    color: 'orange'
}

const active = ({isActive})  => isActive ? activeStyle : undefined

const Nav = ()=>{
    return (
        <nav>
            <ul className={styles.items_list}>
                <li className={styles.item} ><NavLink to={'/'} style={active}>Profile</NavLink></li>
                <li className={styles.item} ><NavLink to={'/dialogs'} style={active}>Dialogs</NavLink></li>
                <li className={styles.item} ><NavLink to={'/users'} style={active}>Users</NavLink></li>
                <li className={styles.item} ><NavLink to={'/music'} style={active}>Music</NavLink></li>
                <li className={styles.item} ><NavLink to={'/settings'} style={active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav