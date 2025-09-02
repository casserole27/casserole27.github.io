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
        <header>
          <h2 className={styles['page-title']}>Portfolio | Works in Progress</h2>
          {/* <p className={styles.info} style={{ color: 'gold' }}> This portfolio is built with Next.js / React, TypeScript, UI/UX, responsive design and a11y.</p> */}
          <p className={styles.info}>Production-level work, for more info see <span><button onClick={() => handleClick(ControlTypes.RESUME)} className={styles.btn}>resume</button></span></p>
          <p className={styles.info}>
            <a href="https://skillicons.dev">
              <Image
              src='https://skillicons.dev/icons?i=react,js,typescript,nodejs,postgres,jest,html,css,sass,styledcomponents,git,github'
              alt="technical skills: react,js,typescript,nodejs,postgres,postman,jest,html,css,styledcomponents,vscode,git,github,figma,ps"
              className={styles['skills-img']}
              width={0}
              height={0}
              />
            </a>
          </p>
        </header>
        
        <section>
          <ul className={`${styles['projects-list']} ${leagueSpartan.className}`}>
            <li className={styles.projects}>
              <a href="https://lewislens.smugmug.com/Other/Clewisdev-Conductor-Solar">
                <Image 
                  src="/assets/conductor-solar/conductor-project-deal-summary.png" 
                  className={styles['project-img']} 
                  alt="Deal summary components for Conductor Solar" 
                  width={0} 
                  height={0} 
                />
              </a>
              <p className={styles.stack}>Fees feature: project deal summary for bids.</p>
            </li>
            <li className={styles.projects}>
              <a href="https://lewislens.smugmug.com/Other/Clewisdev-Conductor-Solar">
                <Image 
                  src="/assets/conductor-solar/conductor-portfolio-deal-summary.png" 
                  className={styles['project-img']} 
                  alt="Deal summary components for Conductor Solar" 
                  width={0} 
                  height={0} 
                />
              </a>
            <p className={styles.stack}>Fees feature: portfolio deal summary for bids.</p>
            </li>
            <li className={styles.projects}>
              <a href="https://lewislens.smugmug.com/Other/Clewisdev-Conductor-Solar">
                <Image 
                  src="/assets/conductor-solar/conductor-investor-table.png" 
                  className={styles['project-img']} 
                  alt="Investor queue table for Conductor Solar" 
                  width={0} 
                  height={0} 
                />
              </a>
              <p className={styles.stack}>Fees feature: investor queue for app admins.</p>
            </li>
            <li className={styles.projects}>
              <a href="https://lewislens.smugmug.com/Other/Clewisdev-Conductor-Solar">
                <Image 
                  src="/assets/conductor-solar/conductor-bid-confirmation-modal.png" 
                  className={styles['project-img']} 
                  alt="Bid confirmation modal for Conductor Solar" 
                  width={0} 
                  height={0} 
                />
              </a>
              <p className={styles.stack}>Bid confirmation modal.</p>
            </li>
            <li className={styles.projects}>
              <a href="https://lewislens.smugmug.com/Other/Clewisdev-Conductor-Solar">
                <Image 
                  src="/assets/conductor-solar/conductor-pricing-estimate.png" 
                  className={styles['project-img']} 
                  alt="Pricing estimate form for Conductor Solar" 
                  width={0} 
                  height={0} 
                />
              </a>
              <p className={styles.stack}>Pricing estimate form.</p>
            </li>
              <li className={styles.projects}>
              <a href="https://lewislens.smugmug.com/Other/Clewisdev-Conductor-Solar">
                <Image 
                  src="/assets/conductor-solar/conductor-pricing-estimate2.png" 
                  className={styles['project-img']} 
                  alt="Pricing estimate form for Conductor Solar" 
                  width={0} 
                  height={0} 
                />
              </a>
              <p className={styles.stack}>Pricing estimate form continued.</p>
            </li>
          </ul>
        </section>

        <section>
          <h3 className={styles['page-title']}>Solidifying learning | Amplifying curiosity</h3>
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
              <p className={styles.stack}>TECH STACK: React, TypeScript, semantic HTML5, CSS, UI/UX & a11y, mobile-first responsive design, Node.js, RESTful APIs</p>
              <p className={styles.stack}>THE TASK : a modern web application built for small business owners who need a quick, simple way to create, store, and share invoices.</p>
              <p className={styles.stack}>THE JOURNEY : a vanillaJS bootcamp project that I’ve expanded to keep my skills current and production-ready.</p>
              <ul style={{ marginLeft: '2rem' }}>
                <li className={styles.stack}>Completed full React and TypeScript refactor resulting in increasing and solidifying concepts used in production, resulting in faster development time.</li>
                <li className={styles.stack}>Set up an Express API with RESTful endpoints, resulting in a deeper understanding of the different HTTP requests and when to use them in production.</li>
                <li className={styles.stack}>Utilized Claude Projects to organize the project, enhance coding efficiency and expand technical skills.</li>
                <li className={styles.stack}>Revamped the UI for better functionality and UX, focusing on responsive design and accessibility to sharpen my frontend skills and contribute more effectively to real-world UI/UX strategies.</li>
              </ul>
              <p className={styles.stack}>I create requirements and assign myself tasks to simulate a production environment.</p>
              <a style={{ display: 'inline' }} href="https://github.com/casserole27/invoice-tracker/issues" target="_blank" className={styles['projects-link']}>Github issues</a>
            </li>
            <li className={styles.projects}>
              <Image 
                src="/assets/devportfolio/music-theory-quiz.png" 
                className={styles['project-img']} 
                alt="music theory quiz" 
                width={0} 
                height={0}
              />
              <a href="https://vercel.com/cassie-lewis-projects/music-theory-quiz" target="_blank" className={styles['projects-link']}>Music Theory Quiz</a>
              <a href="https://github.com/casserole27/music-theory-quiz" target="_blank" className={styles['projects-link']}>Github</a>
              <p className={styles.stack}>TECH STACK: Vue.js, JavaScript / TypeScript, HTML5, CSS, Responsive Design, Github, UX & a11y</p>
              <p className={styles.stack}>THE TASK: build a small frontend application in Vue.js to show adaptability across stacks.</p>
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
        </ul>    
       </section>
        <footer>
          <div className={styles.btncontainer}>   
            <button onClick={() => handleClick(ControlTypes.LEWISLABS)} className={styles.btn}>more cool stuff - lewislabs</button>
            <button onClick={() => handleClick(ControlTypes.HOME)} className={styles.btn}>home</button>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Portfolio;

// </body>
