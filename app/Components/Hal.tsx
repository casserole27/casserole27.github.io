import styles from "../page.module.css";
import { Tourney } from "next/font/google";

const tourney = Tourney({ subsets: ['latin'], variable: '--font-tourney' });

const Hal = () => {
  return (
    <div className={styles.halcontainer}>
      <div className={styles.logo}>
        <div className={`${tourney.className} ${styles.logo1}`}>hal</div>
        <span className={tourney.className}>9000</span>
      </div>
      <div className={styles.hal}>
        <div className={styles.highlight}>
        <div className={styles.haleye}>
          <div className={styles.haleyepupil}></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hal;