import Hours from "./Hours"
import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import facebookIcon from '../public/facebook.png'
import yelpIcon from '../public/yelp.png'

export default function Footer () {
    return (
        <div className={styles.main}>
            <div>
                <div>
                    <h3>Follow us</h3>
                    <a className={styles.social} href='https://www.facebook.com/Jecos-Deli-Catering-208675385814744/'>
                        <Image 
                            src={facebookIcon} 
                            alt='Jecos Deli Facebook Page' 
                            width="40" 
                            height="40">
                        </Image>
                    </a>

                    <a className={styles.social} href='https://www.yelp.com/biz/jecos-deli-nesconset?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)'>
                        <Image 
                            src={yelpIcon} 
                            alt='Jecos Deli Yelp Page'
                            width="40"
                            height="40">
                        </Image>
                    </a>
                </div>
                <hr />

                <div>
                    <h3>Navigate</h3>
                    <div className={styles.nav}>
                        <Link href="/"><a className={styles.a}>Home</a></Link>
                        <Link href="/about"><a className={styles.a}>About Us</a></Link>
                        <Link href="/menu"><a className={styles.a}>Menu</a></Link>
                        <Link href="/catering"><a className={styles.a}>Catering</a></Link>
                        <Link href="/gallery"><a className={styles.a}>Gallery</a></Link>
                        <Link href="/contact"><a className={styles.a}>Contact</a></Link>
                    </div>
                </div>
                <hr />

                <div>
                    <Hours />
                </div>
                <hr />

                <div>
                    <h3>Contact</h3>
                </div>

            </div>
        </div>
    
    )
}