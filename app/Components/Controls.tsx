'use client'

import { useState } from "react";
import { ControlTypes, ControlTypesInput, ExternalLinks, ExternalLinksInput, InternalRoutes, InternalRoutesInput } from "../constants";
import styles from "../page.module.css";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useRouter } from "next/navigation";

const Controls = ({ setInput }: { setInput: (input: ControlTypesInput) => void}) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<InternalRoutesInput | ExternalLinksInput | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (type: ControlTypesInput) => {
    setInput(type);
    setIsActive(true);
    setCurrentRoute(type);
    if (type === ControlTypes.HOME) {
      setIsActive(false);
    }
  };

  const handleNavigate = () => {
    if (!currentRoute) return;

    if (currentRoute in InternalRoutes) {
      router.push(currentRoute === ControlTypes.HOME ? '/' : `/${InternalRoutes[currentRoute as keyof typeof InternalRoutes]}`)
    } else if (currentRoute in ExternalLinks) {
      window.open(ExternalLinks[currentRoute as keyof typeof ExternalLinks], '_blank')
    }
  }; 

  return (
    <div className={styles.controlcontainer}>
      <ToggleGroup.Root type="single" className={styles.togglebtns}>
        <ToggleGroup.Item value="manual" className={styles.togglebtn}>Manual</ToggleGroup.Item>
        <ToggleGroup.Item value="control" className={styles.togglebtn}>Control</ToggleGroup.Item>
      </ToggleGroup.Root>
      
      <button onClick={() => handleClick(ControlTypes.PORTFOLIO)} className={styles.controlbtn} aria-label="portfolio">pf</button>
      <button onClick={() => handleClick(ControlTypes.LEWISLABS)} className={styles.controlbtn} aria-label="lewislabs">lb</button>
      <button onClick={() => handleClick(ControlTypes.GITHUB)} className={styles.controlbtn} aria-label="github" >gh</button>

      <button onClick={() => handleNavigate()} className={`${isActive ? styles.navigate : styles.controlbtn}`} aria-label="execute">exec</button>
      
      <button onClick={() => handleClick(ControlTypes.ABOUT_ME)} className={styles.controlbtn} aria-label="about me">ame</button>
      <button onClick={() => handleClick(ControlTypes.RESUME)} className={styles.controlbtn} aria-label="resume">res</button>
      <button onClick={() => handleClick(ControlTypes.LINKEDIN)} className={styles.controlbtn} aria-label='linked in'>ct</button>
      <button onClick={() => handleClick(ControlTypes.HOME)} className={styles.controlbtn} aria-label="clear">clr</button>
    </div>
  );
};

export default Controls;