'use client'

import styles from './page.module.css';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';
import { useRouter } from 'next/navigation';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan' });

const LewisLabs = () => {
  const router = useRouter();
  const handleClick = () => router.push('/');
  
  return (
    <main className={`${styles['main-container']} ${leagueSpartan.className}`}>  
      <h2 className={styles['page-title']}>LewisLabs</h2>
      <h2 className={styles.info}>A11y studies. Experiments in design, layout, CSS art, and other unique projects</h2>
      <ul className={styles['projects-list']}>
        <li className={styles.projects}>
          <Image 
            src="assets/devportfolio/darth-quote.png" 
            className={styles['project-img']}
            alt='screenshot of darth vader quote generator app'
            width={0}
            height={0}
          />
          <a 
            href="https://www.clewisdev.com/darth-vader-quote-generator/" target="_blank" className={styles['projects-link']}>Darth Vader Quote Generator CSS art</a> 
          <a href="https://github.com/casserole27/darth-vader-quote-generator" target="_blank" className={styles['projects-link']}>Github</a>
        </li>
        <li className={styles.projects}>
          <Image 
            src="/assets/devportfolio/hikefinder.png" 
            className={styles['project-img']}
            alt='screenshot of hikefinder app'
            width={0}
            height={0}  
          />
          <a href="https://www.clewisdev.com/hikefinder/" target="_blank" className={styles['projects-link']}>Hikefinder</a>
          <a href="https://github.com/casserole27/hikefinder" target="_blank" className={styles['projects-link']}>Github</a>
          <a href="https://www.loom.com/share/aa9f0aa0be88452aa90c339253cd4e0b?sid=193a39ff-b06c-4a58-a026-b7c4ba1c5733" target="_blank" className={styles['projects-link']}>Loom : Project Walk-Thru</a>
          <a href="https://www.loom.com/share/10fffbd06bd5470fbd8235be4e708d72?sid=8b766f1d-7288-455a-b4b3-e036b06299b2" target="_blank" className={styles['projects-link']}>Loom : Accessible Modal Walk-Thru</a>
        </li>
        <li className={styles.projects}>
          <Image 
            src="assets/devportfolio/bento-grid.png" 
            className={styles['project-img']}
            alt='screenshot of bento grid experiment'
            width={0}
            height={0}
          />
          <a href="https://www.clewisdev.com/Projects/monday-mindset/monday.html" target="_blank" className={styles['projects-link']}>CSS Bento Box Grid</a> 
          <a href="https://github.com/casserole27/Projects/tree/main/monday-mindset" target="_blank" className={styles['projects-link']}>Github</a>
        </li>                       
        <li className={styles.projects}>
          <Image 
            src="assets/devportfolio/light-dark.png" 
            className={styles['project-img']}
            alt='screenshot of light to dark toggle'
            width={0}
            height={0}
          />
          <a href="https://www.clewisdev.com/Projects/Light-dark-toggle/toggle.html" target="_blank" className={styles['projects-link']}>Light / Dark Mode Toggle</a> 
          <a href="https://github.com/casserole27/Projects/tree/main/Light-dark-toggle" target="_blank" className={styles['projects-link']}>Github</a>
        </li>      
        <li className={styles.projects}>
            <Image 
              src="assets/devportfolio/catan-scorekeeper.png" 
              className={styles['project-img']}
              alt='screenshot of catan scorekeeper'
              width={0}
              height={0}
            />
            <a href="https://www.clewisdev.com/scoreboard-app/" target="_blank" className={styles['projects-link']}>Settlers of Catan Scorekeeper</a> 
            <a href="https://github.com/casserole27/scoreboard-app" target="_blank" className={styles['projects-link']}>Github</a>
        </li>                       
        <li className={styles.projects}>
          <Image 
            src="assets/devportfolio/sendtopager.png" 
            className={styles['project-img']}
            alt='screenshot of send to pager app'
            width={0}
            height={0}
          />
          <a href="https://www.clewisdev.com/send-to-pager/" target="_blank" className={styles['projects-link']}>Send to Pager : CSS 3D UI</a> 
          <a href="https://github.com/casserole27/send-to-pager" target="_blank" className={styles['projects-link']}>Github</a>
        </li>
    {/* <li className={styles.projects}>
        <Image 
          src="assets/devportfolio/grid-experiments.png" 
          className={styles['project-img']}
          alt='screenshot of grid experiments'
          width={0}
            height={0}
        />
        <a href="about2.html" target="_blank" className={styles['projects-link']}>Grid Experiments</a>
        </li>        */}
        <li className={styles.projects}>
          <Image 
            src="assets/devportfolio/devsite-01.png" 
            className={styles['project-img']}
            alt='screenshot of second devsite'
            width={0}
            height={0}
          />
          {/* <a href="/design-two/design-two.html" target="_blank" className={styles['projects-link']}>First Portfolio Design</a></li> */}
          <p className={styles['projects-link']} style={{ textDecoration: 'none'}}>Second portfolio design</p>
        </li>
        <li className={styles.projects}>
          <Image 
            src="/assets/devportfolio/devsite.png" 
            className={styles['project-img']}
            alt='screenshot of first devsite'
            width={0}
            height={0}  
          />
          {/* <a href="/design-one/design-one.html" target="_blank" className={styles['projects-link']}>Second Portfolio Design</a></li> */}
          <p className={styles['projects-link']} style={{ textDecoration: 'none'}}>First portfolio design</p>
        </li>
      </ul>  
      <button onClick={handleClick} className={styles.btn}>home</button>
    </main>
  );
};

export default LewisLabs;