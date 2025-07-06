
import { ControlTypes, ControlTypesDisplay } from "../constants";
import styles from "../page.module.css";
import { JSX } from "react";

const bgClassMap = {
  [ControlTypes.PORTFOLIO]: styles['portfolio'],
  [ControlTypes.LEWISLABS]: styles['labs'],
  [ControlTypes.GITHUB]: styles['github'],
  [ControlTypes.ABOUT_ME]: styles['about'],
  [ControlTypes.RESUME]: styles['resume'],
  [ControlTypes.LINKEDIN]:styles['linkedin'],
  [ControlTypes.HOME]: styles['home']
}

const Com = ({ input, toggleValue }: { input: string, toggleValue: 'manual' | 'control' }) => {
  const control = toggleValue === 'control';
  const bgClass = control ? `${styles.linkmap}` : bgClassMap[input as keyof typeof ControlTypes] || '';

  let title: string | JSX.Element;
  if (control) {
    title = (
      <>
        <h2>site map</h2>
        <li className={styles.sitemapitem}><a href="/portfolio" className={styles.sitelink} target="_blank">portfolio</a></li>
        <li className={styles.sitemapitem}><a href="/lewislabs" className={styles.sitelink} target="_blank">lewislabs</a></li>
        <li className={styles.sitemapitem}><a href="/about" className={styles.sitelink} target="_blank">about me</a></li>
        <li className={styles.sitemapitem}><a href="/assets/clewis-software-engineering-resume.pdf" className={styles.sitelink} target="_blank">resume</a></li>
        <li className={styles.sitemapitem}><a href="https://github.com/casserole27" className={styles.sitelink} target="_blank">github</a></li>
        <li className={styles.sitemapitem}><a href="https://www.linkedin.com/in/clewisdev/" className={styles.sitelink} target="_blank">linkedin</a></li>
        <li className={styles.sitemapitem}><a href="mailto:casserolecodes@gmail.com" className={styles.sitelink} target="_blank">email</a></li>
      </>
    );
    } else {
      title = ControlTypesDisplay[input as keyof typeof ControlTypes];
    }


  let subtitle: string = '';
  if (input === ControlTypes.PORTFOLIO) {
    subtitle = 'wip-100-004'
  } else if (input === ControlTypes.GITHUB) {
    subtitle = '@casserole27'
  } else if (input === ControlTypes.LINKEDIN) {
    subtitle = 'in/clewisdev'
  } else if (input === ControlTypes.LEWISLABS) {
    subtitle = 'exp-100-004'
  } else {
    subtitle = 'ath-oh'
  }
  
  return (
    <div className={styles.comcontainer}>
      <h1 className={styles.title}>
        <a className={styles.titlelink} href="mailto:casserolecodes@gmail.com">
          cassie lewis
        </a>
        {input !== ControlTypes.HOME ? ' | swe' : ''}
      </h1>
      <div className={`${styles.com} ${bgClass}`}>
        {!control && <p className={styles.comcode}>{subtitle}</p>}
        {control ? (
          <ul className={styles.linklist}>{title}</ul>
          ) : (
          <h2 className={styles.comtitle}>{title}</h2>
          )}
      </div>
    </div>
  );
};

export default Com;