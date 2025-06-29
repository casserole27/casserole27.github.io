import { ControlTypes, ControlTypesInput } from "../constants";
import styles from "../page.module.css";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

const Controls = ({ setInput }: { setInput: ( input: ControlTypesInput) => void}) => {
  const handleClick = (type: ControlTypesInput) => setInput(type);

  return (
    <div className={styles.controlcontainer}>
      <ToggleGroup.Root type="single" className={styles.togglebtns}>
        <ToggleGroup.Item value="manual" className={styles.togglebtn}>Manual</ToggleGroup.Item>
        <ToggleGroup.Item value="control" className={styles.togglebtn}>Control</ToggleGroup.Item>
      </ToggleGroup.Root>
      <button onClick={() => handleClick(ControlTypes.PORTFOLIO)}className={styles.controlbtn} aria-label="portfolio">pf</button>
      <button onClick={() => handleClick(ControlTypes.LEWISLABS)}className={styles.controlbtn} aria-label="lewislabs">lb</button>
      <button onClick={() => handleClick(ControlTypes.GITHUB)} className={styles.controlbtn} aria-label="github" >gh</button>
      <button className={styles.controlbtn} aria-label="execute">exec</button>
      <button onClick={() => handleClick(ControlTypes.ABOUT_ME)} className={styles.controlbtn} aria-label="about me">ame</button>
      <button onClick={() => handleClick(ControlTypes.RESUME)} className={styles.controlbtn} aria-label="resume">res</button>
      <button onClick={() => handleClick(ControlTypes.LINKEDIN)} className={styles.controlbtn} aria-label='linked in'>li</button>
      <button onClick={() => handleClick(ControlTypes.HOME)}className={styles.controlbtn} aria-label="clear">clr</button>
    </div>
  );
};

export default Controls;