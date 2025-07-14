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
      <h2 className={styles.info}>I am continuously looking for ways to make a positive impact through tech.</h2>
      <Image 
        src="assets/star.svg" 
        className={styles['star-description']} 
        alt="" 
        width={0} 
        height={0}
      />
      <h2 className={styles.info}>Driven by curiosity, creativity, and challenges, I love writing clean, functional code, collaboration, finding efficient solutions for data, and creating visually appealing and inclusive experiences.</h2>
      <Image 
        src="assets/star.svg" 
        className={styles['star-description']} 
        alt="" 
        width={0} 
        height={0}
      />
      <ul className={`${styles.info} ${styles['info-list']}`}>Achievements:
        <li className={styles.info}>Played a key role in launching a major UI update that measurably improved user experience and reduced support needs.</li>
        <li className={styles.info}>Took initiative to grow into full-stack development, delivering impactful features that boosted revenue.</li>
        <li className={styles.info}>Helped shape design strategy and led documentation efforts, making the codebase more maintainable and development more efficient.</li>
      </ul>
      <Image 
        src="assets/star.svg" 
        className={styles['star-description']} 
        alt="" 
        width={0} 
        height={0}
      />
      <h2 className={`${styles.info} ${styles['info-skills']}`}>I prioritize learning both on an off the job to increase my technical skills.</h2>
      <div className={styles.skills}>
        <a href="https://skillicons.dev">
          <Image
          src='https://skillicons.dev/icons?i=react,js,typescript,nodejs,postgres,postman,jest,html,css,styledcomponents,vscode,git,github,figma,ps'
          alt="technical skills: react,js,typescript,nodejs,postgres,postman,jest,html,css,styledcomponents,vscode,git,github,figma,ps"
          width={800}
          height={50}
          />
        </a>
      </div>
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