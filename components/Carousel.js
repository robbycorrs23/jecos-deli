import { useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import styles from './Carousel.module.scss'
import bulletHero from '../public/bullet-hero.jpeg'
import multiCatering from '../public/multi-catering.jpeg'
import asstWraps from '../public/asst-wraps.jpeg'

export default function CustomCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
            <div className={styles.div}>
                <Image src={bulletHero} alt="" />
            </div>
    );
}