'use client';

import React, { useState, useEffect } from 'react';
import styles from './logo-name.module.css';

let textArray = ['Lavitz Star', 'Lavitz Love', 'Lavitz Starlove', 'Lavitz Online', 'Lavitzio', 'Lavitz Stardust', 'Lavitz'];

export function LogoName() {
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx(textIdx => textIdx + 1);
    }, 1500);

    // Equivalent to componentWillUnmount in a class component
    return () => clearInterval(interval);
  }, []);

  let textThatChanges = textArray[textIdx % textArray.length];

  return (
    <div className={styles.credits}>
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className={styles.shape} height="60" width="320" />
      </svg>
      <div className={styles.text}>{textThatChanges}</div>
    </div>
  )
}
