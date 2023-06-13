

import styles from './star.module.css';

export function Star() {
  return (
    <>
      <svg width='0' height='0'>
        <defs>
          <clipPath id="star-cp" clipPathUnits="objectBoundingBox">
            <path
              d="M0.5, 0 L0.629, 0.345 L0.982, 0.345 L0.682, 0.557 L0.809, 0.891 L0.5, 0.727 L0.191, 0.891 L0.318, 0.557 L0.018, 0.345 L0.371, 0.345z">
            </path>
          </clipPath>
        </defs>
      </svg>
      <div class={`${styles.starclip} ${styles.clipred}`}></div>
    </>
  )
}
