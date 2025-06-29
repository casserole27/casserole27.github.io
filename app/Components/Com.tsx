
import { ControlTypes, ControlTypesDisplay } from "../constants";
import styles from "../page.module.css";

const bgClassMap = {
  [ControlTypes.PORTFOLIO]: styles['portfolio'],
  [ControlTypes.LEWISLABS]: styles['labs'],
  [ControlTypes.GITHUB]: styles['github'],
  [ControlTypes.ABOUT_ME]: styles['about'],
  [ControlTypes.RESUME]: styles['resume'],
  [ControlTypes.LINKEDIN]:styles['linkedin'],
  [ControlTypes.HOME]: styles['home']
}

const Com = ({ input }: { input: string }) => {
  const bgClass = bgClassMap[input as keyof typeof ControlTypes] || '';
  const title = ControlTypesDisplay[input as keyof typeof ControlTypes]

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
      <p className={styles.title}>cassie lewis</p>
      <div className={`${styles.com} ${bgClass}`}>
        <p className={styles.comcode}>{subtitle}</p>
        <h1 className={styles.comtitle}>{title}</h1>
      </div>
    </div>
  );
};

export default Com;