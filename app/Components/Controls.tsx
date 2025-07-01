'use client'

import { useState } from "react";
import { ControlTypes, ControlTypesInput, ExternalLinks, ExternalLinksInput, InternalRoutes, InternalRoutesInput } from "../constants";
import styles from "../page.module.css";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useRouter } from "next/navigation";

type ToggleValue = 'manual' | 'control';
interface ControlsProps {
  setInput: (input: ControlTypesInput) => void;
  toggleValue: ToggleValue;
  setToggleValue: (val: ToggleValue) => void;
}

const Controls = ({ 
  setInput, 
  toggleValue,
  setToggleValue
}: ControlsProps) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<InternalRoutesInput | ExternalLinksInput | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (type: ControlTypesInput) => {
    setInput(type);
    setIsActive(true);
    setCurrentRoute(type);
    if (type === ControlTypes.HOME || toggleValue === 'control') {
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

  const controlClass = `${toggleValue !== 'control' ? styles.controlbtn : ''}`;
  const isDisabled = toggleValue === 'control';
  let execClass: string = `${styles.controlbtn}`;
  if (isActive) {
    execClass=`${styles.navigate}`
  } else if (toggleValue === 'control') {
    execClass=`${styles.disabled}`;
  } 
  const manualBg = toggleValue === 'manual' ? '#777' : '';
  const controlBg = toggleValue === 'control' ? '#777' : ''; 


  return (
    <div className={styles.controlcontainer}>
      <ToggleGroup.Root 
        type="single" 
        className={styles.togglebtns}
        value={toggleValue}
        onValueChange={(val: 'manual' | 'control') => {
          if (val) {
            setToggleValue(val);
          }
        }}
      >
        <ToggleGroup.Item value='manual' className={styles.togglebtn} style={{ backgroundColor: manualBg }}>Manual</ToggleGroup.Item>
        <ToggleGroup.Item value='control' className={styles.togglebtn} style={{ backgroundColor: controlBg }}>Control</ToggleGroup.Item>
      </ToggleGroup.Root>
      
      <button 
        onClick={() => handleClick(ControlTypes.PORTFOLIO)} 
        className={controlClass} 
        aria-label="portfolio" 
        disabled={isDisabled}>
          pf
      </button>
      <button 
        onClick={() => handleClick(ControlTypes.LEWISLABS)} 
        className={controlClass} 
        aria-label="lewislabs"
        disabled={isDisabled}>  
          lb
      </button>
      <button 
        onClick={() => handleClick(ControlTypes.GITHUB)} 
        className={controlClass} 
        aria-label="github" 
        disabled={isDisabled}>
          gh
      </button>

      <button onClick={() => handleNavigate()} className={execClass} aria-label="execute" disabled={isDisabled}>exec</button>
      
      <button 
        onClick={() => handleClick(ControlTypes.ABOUT_ME)} 
        className={controlClass} 
        aria-label="about me"
        disabled={isDisabled}>
          ame
      </button>
      <button 
        onClick={() => handleClick(ControlTypes.RESUME)} 
        className={controlClass} 
        aria-label="resume"
        disabled={isDisabled}>
          res
      </button>
      <button 
        onClick={() => handleClick(ControlTypes.LINKEDIN)} 
        className={controlClass} 
        aria-label='linked in'
        disabled={isDisabled}>
          ct
      </button>
      <button 
        onClick={() => {
          handleClick(ControlTypes.HOME)
          setToggleValue('manual')
        }} 
        className={styles.controlbtn} 
        aria-label="clear">
          clr
      </button>
    </div>
  );
};

export default Controls;