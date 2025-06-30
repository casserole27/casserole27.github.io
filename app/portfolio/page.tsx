'use client'

import styles from './page.module.css'
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';
import { useRouter } from 'next/navigation';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan' });

const Portfolio = () => {
  const router = useRouter();
  const handleClick = () => router.push('/');

  return (
    <>
      <main className={`${styles['main-container']} ${leagueSpartan.className}`}>  
        <ul className={`${styles['projects-list']} ${leagueSpartan.className}`}>
          <li className={styles.projects}>
            <Image 
              src="/assets/devportfolio/invoice-creator.png" 
              className={styles['project-img']} 
              alt="invoice creator app" 
              width={0} 
              height={0} 
            />
            <a href="https://casserole27.github.io/invoice-creator/" target="_blank" className={styles['projects-link']}>In progress: Invoice Creator CRUD app conversion</a>
            <a href="https://github.com/casserole27/invoice-creator" target="_blank" className={styles['projects-link']}>Github</a>
            <p className={styles.stack}>TECH STACK: HTML5, CSS, JavaScript, Github, UX enhancements, PostGresSQL, Objection.js, Knex.js, Express API</p>
          </li>
          <li className={styles.projects}>
            <Image 
              src="/assets/devportfolio/color-scheme-generator.png" 
              className={styles['project-img']} 
              alt="color scheme generator app" 
              width={0} 
              height={0}
            />
            <a href="https://casserole27.github.io/color-scheme-generator/" target="_blank" className={styles['projects-link']}>Color Scheme Generator</a>
            <a href="https://github.com/casserole27/color-scheme-generator" target="_blank" className={styles['projects-link']}>Github</a>
            <p className={styles.stack}>TECH STACK: HTML5, CSS, JavaScript, REST APIs, Responsive Design, Github, UX & accessibility</p>
          </li>
        </ul>       
        <button onClick={handleClick} className={styles.btn}>home</button>
      </main>
    </>
  );
};

export default Portfolio;

// </body>
