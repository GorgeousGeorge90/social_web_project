import avatar from '../../../../assets/img/zeus.jpeg'
import styles from './Post.module.css'


const Post = (props) => {

    return (
        <div className={styles.post}>
            <div className={styles.ava}>
                <img src={avatar} alt=""/>
            </div>
            <div className={styles.post_text}>
                {props.text}
            </div>
        </div>
    )
}

export default Post



