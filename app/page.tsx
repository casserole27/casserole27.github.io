'use client'

import { useState } from "react"; 
import styles from "./page.module.css";
import { Lexend_Zetta } from "next/font/google";
import Com from "./Components/Com";
import Hal from "./Components/Hal";
import Controls from "./Components/Controls";
import { ControlTypes, ControlTypesInput } from "./constants";

const lexend = Lexend_Zetta({ subsets: ['latin'], variable: '--font-lexend-zetta' });

export default function Home() {
  const [input, setInput] = useState<ControlTypesInput>(ControlTypes.HOME);
  const [toggleValue, setToggleValue] = useState<'manual' | 'control'>('manual');
  const isMain = Boolean(input === ControlTypes.HOME);

  return (
    <div className={`${lexend.className} ${styles.page}`}>
      <main className={styles.main}>
        <Com 
          input={input}
          toggleValue={toggleValue}
        />
        <Hal />
        <Controls 
          isMain={isMain}
          setInput={setInput} 
          toggleValue={toggleValue}
          setToggleValue={setToggleValue}
        />
        <div className={styles.speaker}></div>
      </main>
    </div>
  );
};
