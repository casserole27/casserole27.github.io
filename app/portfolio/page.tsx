'use client'

import styles from './page.module.css'
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ControlTypes, ExternalLinks, ExternalLinksInput, InternalRoutes, InternalRoutesInput } from '../constants';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan' });

const Portfolio = () => {
  const router = useRouter();
  const handleClick = (currentRoute: InternalRoutesInput | ExternalLinksInput) => {
    if (!currentRoute) return;

    if (currentRoute in InternalRoutes) {
      router.push(currentRoute === ControlTypes.HOME ? '/' : `/${InternalRoutes[currentRoute as keyof typeof InternalRoutes]}`)
    } else if (currentRoute in ExternalLinks) {
      window.open(ExternalLinks[currentRoute as keyof typeof ExternalLinks], '_blank')
    }
  };

  return (
    <>
      <main className={`${styles['main-container']} ${leagueSpartan.className}`}>  
        <h2 className={styles['page-title']}>Portfolio | Works in Progress</h2>
        <p className={styles.info}>Building new things. Amplifying curiosity. Solidifying learning.</p>
        <p className={styles.info}>For work-related experience, see <span><button onClick={() => handleClick(ControlTypes.RESUME)} className={styles.btn}>resume</button></span></p>
        <ul className={`${styles['projects-list']} ${leagueSpartan.className}`}>
          <li className={styles.projects}>
            <Image 
              src="/assets/devportfolio/invoice-tracker.png" 
              className={styles['project-img']} 
              alt="invoice creator app" 
              width={0} 
              height={0} 
            />
            <a href="https://invoice-tracker-drab.vercel.app/" target="_blank" className={styles['projects-link']}>The Invoice Tracker - CRUD app conversion</a>
            <a href="https://github.com/casserole27/invoice-tracker" target="_blank" className={styles['projects-link']}>Github</a>
            <p className={styles.stack}>TECH STACK: React, semantic HTML5, CSS, TypeScript, UI/UX & a11y, mobile-first responsive design, Node.js, RESTful APIs</p>
            <p className={styles.stack}>THE STORY : a modern web application built for small business owners who need a quick, simple way to invoice via download or e-mail.</p>
            <p className={styles.stack}>THE JOURNEY : this was originally a small vanilla JS bootcamp project. I use it to keep my development skills up to date by practicing and solidifying concepts. I create requirements and assign myself tasks to simulate a production environment.</p>
            <a style={{ display: 'inline' }} href="https://github.com/casserole27/invoice-tracker/issues" target="_blank" className={styles['projects-link']}>Github issues</a>
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
            <p className={styles.stack}>TECH STACK: HTML5, CSS, JavaScript, RESTful APIs, Responsive Design, Github, UX & a11y</p>
          </li>

                    <li className={styles.projects}>
            <Image 
              src="/assets/devportfolio/capstone-allweather.png" 
              className={styles['project-img']} 
              alt="invoice creator app" 
              width={0} 
              height={0} 
            />
            <a href="https://casserole27.github.io/invoice-creator/" target="_blank" className={styles['projects-link']}>In progress: AllWeather - how to go outside any time</a>
            <a href="https://github.com/casserole27/allweather" target="_blank" className={styles['projects-link']}>Github</a>
            <p className={styles.stack}>PROPOSED TECH STACK: React with TypeScript, UI/UX design, a11y, PostGresSQL, Express API</p>
            <p className={styles.stack}>THE STORY : my kiddo attended an experimental private school focused on environmental education with an extensive daily required gear list for outdoor activities, especially during colder weather. 
              Introducing AllWeather: encouraging families, children, or anyone to get outdoors based on daily forecasts. Provides curated gear lists or customized planning for specific activities.
            </p>
          </li>
        </ul>    
        <div className={styles.btncontainer}>   
          <button onClick={() => handleClick(ControlTypes.LEWISLABS)} className={styles.btn}>more cool stuff - lewislabs</button>
          <button onClick={() => handleClick(ControlTypes.HOME)} className={styles.btn}>home</button>
        </div>
      </main>
    </>
  );
};

export default Portfolio;

// </body>
