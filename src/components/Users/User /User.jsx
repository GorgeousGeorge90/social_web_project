import logo from '../../../assets/img/user.png'
import s from './User.module.css'

const User = (props)=> {
    debugger;

    const follow = ()=> {
        const userId = props.id
        props.follow(userId)
    }

    const unfollow = ()=> {
        const userId = props.id
        props.unfollow(userId)
    }

    return (
        <div className={s.userStyle}>
            <div className={s.logo}>
                <p><img src={logo}/></p>
                <p>{ !props.followed ? <button onClick={follow}>Unfollow</button> :
                    <button onClick={unfollow}>Follow</button>}</p>
            </div>
            <div className={s.info}>
                <p className={s.name}>{props.name}</p>
                <p className={s.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default User