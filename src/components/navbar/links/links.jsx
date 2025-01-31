import styles from './links.module.css';
import NavLink from './navLink/navLink';

const Links = () => {

    const links = [
        {
            title: 'Homepage',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Cart',
            path: '/cart',
        },
        {
            title: 'FAQ',
            path: '/faq',
        },
    ];

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}
        </div>
    )
}

export default Links;