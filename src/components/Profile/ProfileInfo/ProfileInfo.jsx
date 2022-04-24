import styles from './ProfileInfo.module.css'
import avatar from '../../../assets/img/zeus.jpeg'



const myData = {
      name:'Egor',
      age: 31,
      city: 'Moscow',
      job: 'React Developer',
}

const ProfileInfo = () => {
    return (
        <div className={styles.info}>
            <div className={styles.picture}>
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
                    alt="background"/>
            </div>
            <div className={styles.description}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="logo"/>
                </div>
                <div className={styles.private}>
                    <p>name: {myData.name}</p>
                    <p>age: {myData.age}</p>
                    <p>city: {myData.city}</p>
                    <p>job: {myData.job}</p>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo