import { useEffect, useRef } from "react";
import styles from "../page.module.css";
import { Tourney } from "next/font/google";

const tourney = Tourney({ subsets: ['latin'], variable: '--font-tourney' });

const Hal = () => {
  const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  setTimeout(() => {
    requestAnimationFrame(() => {
      ref.current?.classList.add(styles['haleyepupil-glow']);
    });
  }, 1000);

    setTimeout(() => {
    requestAnimationFrame(() => {
      ref.current?.classList.add(styles['haleyepupil-normal']);
    });
  }, 3000);
}, []);


  return (
    <div className={styles.halcontainer}>
      <div className={styles.logo}>
        <div className={`${tourney.className} ${styles.logo1}`}>hal</div>
        <span className={tourney.className}>9000</span>
      </div>
      <div className={styles.hal}>
        <div className={styles.highlight}>
          <div className={styles.haleye}>
            <div ref={ref} className={styles.haleyepupil}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hal;