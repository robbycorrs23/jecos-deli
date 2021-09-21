import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import CustomCarousel from '../components/Carousel'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jecos Deli locted in Smithtown New York</title>
        <meta name="description" content="Website for Jecos Deli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <CustomCarousel />

        <Footer />
        
      </main>

    </div>
  )
}
