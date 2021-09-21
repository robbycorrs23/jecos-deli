import Link from 'next/link'
import styles from './Navbar.module.scss'

export default function Navbar () {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu">
                        <a>Menu</a>
                    </Link>
                </li>
                <li>
                    <Link href="/catering">
                        <a>Catering</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}