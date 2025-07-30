'use Client';
import styles from './index.module.css'

const PostCard = ({title: name, description}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>{name}</div>
            <div className={styles.cardBody}>{description}</div>
        </div>
    );
}
 
export default PostCard;