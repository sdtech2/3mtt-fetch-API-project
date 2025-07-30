import styles from './index.module.css'
import Link from 'next/link';
import { BsPersonCircle } from "react-icons/bs";


const navbar = () => {
    return ( 
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
                <Link href='/'>Facebook</Link>
            </div>
            <div className={styles.navbarLinks}>
                <Link href='/' className={styles.navbarHome}>Home</Link>
                <Link href='/profile' className={styles.navbarProfile}><BsPersonCircle />  Profile</Link>
            </div>
        </div>
    );
}
 
export default navbar;