import styles from './ProfileInfo.module.css'
import avatar from '../../../assets/img/zeus.jpeg'
import Preloader from "../../common /Preloader/Preloader";




// const myData = {
//       name:'Egor',
//       age: 31,
//       city: 'Moscow',
//       job: 'React Developer',
// }

const ProfileInfo = (props) => {


    return (
        <div className={styles.info}>
            { !props.profile ? <Preloader/> : null}
            <div className={styles.picture}>
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
                    alt="background"/>
            </div>
            <div className={styles.description}>
                <div className={styles.avatar}>
                    { !props.profile.photos.small ?   <img src={avatar}/> : <img src={props.profile.photos.small}/>}
                </div>
                <div className={styles.private}>
                    <p>name: {props.profile.fullName}</p>
                    <p>aboutMe: {props.profile.aboutMe}</p>
                    <p>VK: {props.profile.contacts.vk}</p>
                    <p>GitHub: {props.profile.contacts.github}</p>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo