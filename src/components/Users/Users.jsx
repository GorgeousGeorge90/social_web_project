import s from "./User /User.module.css";
import logo from "../../assets/img/user.png";


const Users = (props)=> {

    const users = props.users

    return (
        <div>
            {
                users.map(e=> <div key={e.id} className={s.userStyle}>
                    <div className={s.logo}>
                        <img src={logo}/>
                        <span>{ !e.followed ? <button onClick={() => props.follow(e.id)}>follow</button> :
                            <button onClick={()=> props.unfollow(e.id)}>unfollow</button>
                        }</span>
                    </div>
                    <div className={s.info}>
                        <p className={s.name}>{e.name}</p>
                        <p className={s.status}>{e.status}</p>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users
