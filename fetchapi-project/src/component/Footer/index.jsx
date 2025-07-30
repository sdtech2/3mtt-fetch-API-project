import Link from "next/link";
import styles from './index.module.css'


const footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <Link href='/'>Facebook</Link>
            </div>
            <div className={styles.footerLinks}>
                <Link href='/about'>About</Link>
                <Link href='/privacy'>Privacy</Link>
                <Link href='/terms'>Terms</Link>
            </div>
            <div className={styles.footerCopyright}>© Copyrights {new Date().getFullYear()} | Facebook </div>
        </div>
    );
}
 
export default footer;

