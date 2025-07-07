'use client'

import styles from './page.module.css'
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ControlTypes, InternalRoutes, InternalRoutesInput } from '../constants';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan' });

const Portfolio = () => {
  const router = useRouter();
  const handleClick = (currentRoute: InternalRoutesInput) => {
    if (currentRoute === ControlTypes.LEWISLABS) {
      router.push(`/${InternalRoutes[currentRoute]}`);
    } else {
      router.push('/')
    }
  };

  return (
    <>
      <main className={`${styles['main-container']} ${leagueSpartan.className}`}>  
        <ul className={`${styles['projects-list']} ${leagueSpartan.className}`}>
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
          <li className={styles.projects}>
            <Image 
              src="/assets/devportfolio/invoice-creator-crud.png" 
              className={styles['project-img']} 
              alt="invoice creator app" 
              width={0} 
              height={0} 
            />
            <a href="https://casserole27.github.io/invoice-creator/" target="_blank" className={styles['projects-link']}>In progress: Small business invoice creator - CRUD app conversion</a>
            <a href="https://github.com/casserole27/invoice-creator" target="_blank" className={styles['projects-link']}>Github</a>
            <p className={styles.stack}>TECH STACK: HTML5, CSS, JavaScript, UX enhancements, Node.js PostGresSQL, Objection.js, Knex.js, Express API</p>
            <p className={styles.stack}>THE STORY : built for small business owners who need a quick, simple way to invoice via e-mail.</p>
          </li>
          {/* <li className={styles.projects}>
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
          </li> */}
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
