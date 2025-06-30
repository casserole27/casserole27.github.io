'use client'

import styles from "./page.module.css";
import Image from "next/image"
import { League_Spartan } from 'next/font/google';
import { useRouter } from 'next/navigation';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan' });

const About = () => {
  const router = useRouter();
  const handleClick = () => router.push('/');

  return (
    <main className={`${styles['main-container']} ${leagueSpartan.className}`}>  
      <h2 className={styles['page-title']}>Hello, World! I am Cassie, a full-stack web developer.</h2>
      <Image 
        src="assets/star.svg" 
        className={styles['star-description']} 
        alt="" 
        width={0} 
        height={0}
      />
      <h2 className={styles.info}>🍃 I am especially interested in the intersection of technology and sustainability, and I have two years of experience working in the greentech industry. 🍃</h2>
      <Image 
        src="assets/star.svg" 
        className={styles['star-description']} 
        alt="" 
        width={0} 
        height={0}
      />
      <h2 className={styles.info}>I am driven by curiosity, creativity, and challenges. I love writing clean, functional code, collaboration, finding efficient solutions for data, and creating visually appealing experiences.</h2>
      <Image 
        src="assets/star.svg" 
        className={styles['star-description']} 
        alt="" 
        width={0} 
        height={0}
      />
      <section className={styles['about-section']}>
        <Image 
          src="https://photos.smugmug.com/Other/HOSTING/i-mD8DW7L/0/12fa8723/M/headshot-M.png" 
          className={styles.headshot} 
          alt="Cassie wearing glasses against a red background with a yellow star"
          width={275}
          height={0}
        />
        <ul className={`${styles['about-points']} ${leagueSpartan.className}`}>
            <li className={styles['about-points-list']}>Happily partnered, happily parenting in beautiful Southeast Ohio</li>
            <li><a href="https://lewislens.smugmug.com/" target="_blank" className={styles['about-points-link']}>
                Multimedia Artist</a></li>
            <li className={styles['about-points-list']}>Unapologetic Sci-Fi and Fantasy Nerd</li>
            <li><a href="https://app.thestorygraph.com/profile/casserole27" target="_blank" className={styles['about-points-link']}>
            Avid Reader and Effective Living Enthusiast</a></li>
            <li className={styles['about-points-list']}>Homesteader and Cooker of Delicious Things</li>
        </ul>
      </section>
      <button onClick={handleClick} className={styles.btn}>home</button>
    </main>
  );
};

export default About;