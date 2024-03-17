
import Links from './links/links';
import styles from './contactbar.module.css';

const ContactBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <Links />
            </div>
            <div>Tel: (000) 000-0000</div>
            <div>Email: info.info@gmail.com</div>
        </div>
    );
}

export default ContactBar;